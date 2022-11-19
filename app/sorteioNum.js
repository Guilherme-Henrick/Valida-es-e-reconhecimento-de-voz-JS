const numSecreto = gerarNumero();

console.log("Numero secreto: " + numSecreto);

function gerarNumero(){
    return parseInt(Math.random() * 100);
}