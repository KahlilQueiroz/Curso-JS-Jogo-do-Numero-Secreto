let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTexto('h1' , 'Jogo do Número Secreto');
    exibirTexto('p' , 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // Recalcula a cada tentativa
    
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Você acertou!');
        let mensagemTentativas = `Parabéns, você acertou com ${tentativas} ${palavraTentativa}! O número secreto é ${numeroSecreto}!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto){
            exibirTexto('p', `Você errou, mas o número secreto é maior que ${chute}`);
        } else {
            exibirTexto('p', `Você errou, mas o número secreto é menor que ${chute}`);
        } 
        tentativas++; // Aumenta o número de tentativas
        limparCampo();
    }
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if(quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log (listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}