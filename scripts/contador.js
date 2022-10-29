const campoValor = document.getElementById("valor");
const botaoDiminuir = document.getElementById("diminuir");
const botaoResetar = document.getElementById("resetar");
const botaoAumentar = document.getElementById("aumentar");
let valor = 0;

function diminuir(){
    valor--
    campoValor.textContent = valor;
    verificacao()
}
function resetar(){
    valor = 0
    campoValor.textContent = valor;
    verificacao()
}
function aumentar(){
    valor++
    campoValor.textContent = valor;
    verificacao()
}

function verificacao(){
    if (valor >= 1){
        campoValor.style.color = "green"
    }else if(valor <= -1){
        campoValor.style.color = "red"}
               else if(valor == 0){
                campoValor.style.color = "black"}
}