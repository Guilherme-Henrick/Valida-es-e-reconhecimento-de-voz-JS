function verificaValidadeChute(chute){
    const numero = +chute;
    
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido<div>`;
        return;
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>O numero precisa estar entre ${menorValor} e ${maiorValor}<div>`
    }

    if(numero === numSecreto){ 
        document.body.innerHTML = 
        `<h2>Você acertou!</h2>
        <h3>O numero secreto era ${numSecreto}!</h3>
        
        <button id="botao" class="btn-replay">Jogar Novamente</button>`;
    } else if(numero > numSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'botao'){
        window.location.reload();
    }
})