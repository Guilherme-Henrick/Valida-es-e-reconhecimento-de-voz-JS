function verificaValidadeChute(chute){
    const numero = +chute;
    
    if(chuteForInvalido(numero)){
        console.log("valor invalido")
    }

    if(numeroMaiorOuMenor(numero)){
        console.log(`O numero precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}