const campoValor = document.getElementById("valor");
const botaoDiminuir = document.getElementById("diminuir");
const botaoResetar = document.getElementById("resetar");
const botaoAumentar = document.getElementById("aumentar");
let valor = 0;
var audio = new Audio('audio/roncando.mp3')

function diminuir(){
    valor--
    campoValor.textContent = valor;
    verificacao()
    pararaudio()
}
function resetar(){
    valor = 0
    campoValor.textContent = valor;
    verificacao()
    pararaudio()
}
function aumentar(){
    valor++
    campoValor.textContent = valor;
    tocaraudio()
    pararaudio()
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
function tocaraudio(){
    if(valor == 10){
        audio.play()
    } 
}
function pararaudio(){
    if(valor != 10){
        audio.pause();
        audio.currentTime = 0;
    }
}