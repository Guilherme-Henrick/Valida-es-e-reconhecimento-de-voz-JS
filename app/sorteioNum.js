const menorValor = 1;
const maiorValor = 100;
const numSecreto = gerarNumero();

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;

console.log("Numero secreto: " + numSecreto);

function gerarNumero(){
    return parseInt(Math.random() * maiorValor);
}