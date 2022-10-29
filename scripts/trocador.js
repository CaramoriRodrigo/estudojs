const botao = document.getElementById("botao");
const fundo = document.getElementsByName("body");
const texto = document.getElementById("texto");
var cores = ["red","blue","green","yellow","orange","black","pink","grey","purple","gold","silver"];


function trocarCor(){
     let valorAleatorio = Math.floor(Math.random() * cores.length);
     let valorCor = cores[valorAleatorio]
     document.body.style.background = valorCor;
     texto.textContent = "Sua cor atual é :" + valorCor;
}
