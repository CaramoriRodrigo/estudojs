const buttonRandom = document.getElementById("buttonRandom")
const buttonLeft = document.getElementById("buttonLeft")
const buttonRight = document.getElementById("buttonRight")
const img = document.getElementById("img")
const personName = document.getElementById("name")
const aboutMe = document.getElementById("aboutMe")
const contador = document.getElementById("contador")
let valor = 0;


const personsImg = ["imgs/terryCrews","imgs/theRock","imgs/vinDiesel"]
const personsName = ["Terry Crews","The Rock","Vin Diesel"]
const personsAboutMe = ["Terrence Alan Crews, conhecido como Terry Crews, é um ator, apresentador, dançarino, ilustrador, ativista e ex-jogador de futebol americano.","Dwayne Douglas Johnson, também conhecido pelo seu nome no ringue The Rock, é um ator americano, ex-lutador profissional e ex-jogador de futebol americano universitário pela Universidade de Miami, vencendo o campeonato nacional em 1991 pelo Miami Hurricanes.","Mark Sinclair Vincent, mais conhecido como Vin Diesel (Condado de Alameda, 18 de julho de 1967) é um ator, roteirista e produtor de cinema norte-americano."]

    img.setAttribute('src',personsImg[valor] + ".jpg");
    personName.textContent = personsName[valor];
    aboutMe.textContent = personsAboutMe[valor];
    contador.textContent = (valor + 1)

function trocarElementosRight(){
    valor++
    watchDog()
    trocarValores()
}
function trocarElementosLeft(){
    valor--
    watchDog()
    trocarValores()
}
function trocarElementosRandom(){
    valor = Math.floor(Math.random() * personsImg.length);
    trocarValores()
    watchDog()
}

function watchDog(){
    if(valor == personsImg.length){
        valor = 0
    }else if(
        valor == -1){
            valor = personsImg.length - 1
        }
    }
    console.log(valor)

function trocarValores(){
    img.setAttribute('src',personsImg[valor] + ".jpg");
    personName.textContent = personsName[valor];
    aboutMe.textContent = personsAboutMe[valor];
    contador.textContent = (valor + 1)
}


buttonRandom.addEventListener("click",trocarElementosRandom)
buttonRight.addEventListener("click",trocarElementosRight)
buttonLeft.addEventListener("click",trocarElementosLeft)