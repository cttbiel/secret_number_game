//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do número secreto!';

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaNumerosSorteados = [];
let quantidadeDeNumeros = 25;
let randomNumber = generateRandomNumber();
let tentativas = 1;
mensagemInicial();
function verificarChute(){
    let chute = document.querySelector ('input').value;
    if (randomNumber == chute){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > randomNumber) {
            exibirTextoNaTela('p','É um número um pouco menor!');

        } else {
            exibirTextoNaTela('p','É um número um pouco maior!');

        } 
        tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Female',{rate:1.2});
    }

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 25');
}


function generateRandomNumber() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == quantidadeDeNumeros) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return generateRandomNumber();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    randomNumber = generateRandomNumber  ();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}