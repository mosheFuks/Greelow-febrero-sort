var valores = ["2","3","4","5","6","7","8","9","10","K","Q","J","A"]

//Obtiene un valor para saber el tipo de carta
function getRandomPalo(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

//Obtiene el numero de la carta del array valores
const obtenerNumero = () =>(valores[Math.floor(Math.random() * valores.length)])

//Toma la el div con el id carta
const cards = document.querySelector("#cards")

//Toma el body del html
const cuerpo = document.body

//Cuando se carga la pagina le da pie a la funcion comenzar()
cuerpo.onload = comenzar;

function mostrarCard() {
    let palo = ""
        cards.innerHTML +=
        `<div class="card" >
            <div class="palo" id="paloArriba">
            
                ${palo = ponerPalo()}
            </div>
            <div class="numCarta numero" id="numCarta">
                ${ponerNumero()}
            </div>
            <div class="paloInfe" id="paloAbajo">
                ${palo}
            </div>
        </div>`
}

const ponerPalo = () => {
    let valorNumPalo = getRandomPalo(1, 4)
    let tipoPalo;
    switch (valorNumPalo) {
        case 1:
            tipoPalo = "♥" 
            break;
        case 2:
            tipoPalo = "♠" 
            break;
        case 3:
            tipoPalo = "♣"
            break;
        case 4:
            tipoPalo = "♦"
            break;
        default:
            break;
    }
    return tipoPalo
}

function ponerNumero(){
    let numCarta= obtenerNumero()
    return numCarta;
}

function agregarCarta(){
    mostrarCard()
}

function comenzar(){
    mostrarCard()
}

//Esta funcion agrega un nueva carta cada 10" y deja de crear cuando ya hay 6 cartas en pantalla, crea solo 5 mas\
let cont = 1
var intervalo = setInterval(() => {
    agregarCarta()
    cont++;
    if (cont == 5){
        clearInterval(intervalo)
    }
}, 10000)