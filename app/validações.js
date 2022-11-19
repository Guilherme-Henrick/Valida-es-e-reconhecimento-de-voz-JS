function verificaValidadeChute(chute){
    const numero = +chute;
    
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido<div>`
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>O numero precisa estar entre ${menorValor} e ${maiorValor}<div>`
    }

    if(numero === numSecreto){ 
        document.body.innerHTML = 
        `<h2>Você acertou!</h2>
        <h3>O numero secreto era ${numSecreto}!</h3>`

    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}