var valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
var cartasIngresadas = []

//Obtiene un valor para saber el tipo de carta
function getRandomPalo(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

//Obtiene el numero de la carta del array valores
const obtenerNumero = () =>(valores[Math.floor(Math.random() * valores.length)])

//Toma el div con el id carta
const cards = document.querySelector("#cards")

const ordCartas = document.querySelector("#orderCards")

//Toma la cantidad de cartas que ingreso el usuario
let cantCartasAIngresar = document.querySelector("#cantCartas")
let cantCartasAMostrar = 0;

//Toma el body del html
const cuerpo = document.body

/*Hace el innerHTML en cards, crea un nuevo Objeto Carta, a esa Carta le asigna un numero y un palo 
(Que es el mismo que se muestra en el innerHTML), y agrega esa carta a lai lista de cartasIngresadas*/
function mostrarCard() {
    let paloCarta = ponerPalo();
    let numeroCarta = ponerNumero();
    cards.innerHTML +=
    `<div class="card" >
        <div class="palo" id="paloArriba">
            ${paloCarta}
        </div>
        <div class="numCarta numero" id="numCarta">
            ${numeroCarta}
        </div>
        <div class="paloInfe" id="paloAbajo">
            ${paloCarta}
        </div>
    </div>`
    var carta = new Object()
    carta.palo = paloCarta
    carta.numero = numeroCarta
    ponerId(carta)
    cartasIngresadas.push(carta)
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

/*Para poder ordenar las cartas se le asigna un id a la carta. El id es igual al numero de la carta, pero 
si el numero es una letra se fija que letra es y lo cambia por un numero */ 
function ponerId(carta){
        switch(carta.numero){
            case "J":
                carta.id = 11
                break;
            case "Q":
                carta.id = 12
                break;
            case "K":
                carta.id = 13
                break;
            case "A":
                carta.id = 1
                break;
            default:
                carta.id = carta.numero
                break;
    }
}

//Muestra tantas cartas como el ususario indico
const mostrarCantCartasSegunIngreso = () => {
    cards.innerHTML = ""
    cantCartasAMostrar = cantCartasAIngresar.value
    if (cantCartasAMostrar > 0) {
        for (let i = 0; i < cantCartasAMostrar; i++) {
            mostrarCard()
        }
    }
}

function ordenarCartas(){
    for (let j=0; j < cartasIngresadas.length; j++){
        for(let i = 0; i < cartasIngresadas.length; i++){
            if(cartasIngresadas[i].id > cartasIngresadas[i+1].id){
                var temp = cartasIngresadas[i]
                cartasIngresadas[i] = cartasIngresadas[i+1]
                cartasIngresadas[i+1] = temp
            }
        }
    }
    return cartasIngresadas;
}

/*Al hacer click en Sorteo, se ordenan las cartas de cartasIngresadas y en ordCartas se hace un 
innerHTML de cada carta de la lista que devuelve ordenarCartas() (que se guarda en cartasEnOrdenCorrecto)*/
function mostrarCartasOrdenadas(){
    var cartasEnOrdenCorrecto = ordenarCartas(cartasIngresadas);
    console.log(cartasEnOrdenCorrecto)
    for (let i = 0; i <  cartasEnOrdenCorrecto.length; i++) {
    ordCartas.innerHTML +=
    `<div class="card" >
        <div class="palo" id="paloArriba">
            ${cartasEnOrdenCorrecto[i].palo}
        </div>
        <div class="numCarta numero" id="numCarta">
            ${cartasEnOrdenCorrecto[i].numero}
        </div>
        <div class="paloInfe" id="paloAbajo">
            ${cartasEnOrdenCorrecto[i].palo}
        </div>
    </div>`
    }
}



