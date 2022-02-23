var valores = [2,3,4,5,6,7,8,9,10,"K","Q","J","A"]

//Obitiene un valor para saber el tipo de carta
function getRandomPalo(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

//Obtiene el numero de la carta del array valores
const obtenerNumero = () =>(valores[Math.floor(Math.random() * valores.length)])



//Toma la el div con el id carta
const carta = document.querySelector("#carta")

//Toma el body del html
const cuerpo = document.body

//Toma el palo del html
const palo = document.querySelector("#paloArriba")
const paloInf = document.querySelector("#paloAbajo")
const valorCarta = document.querySelector("#numCarta")

//Cuando se carga la pagina le da pie a la funcion comenzar()
cuerpo.onload = comenzar;

const ponerPalo = () => {
    let valorNumPalo = getRandomPalo(1, 4)
    let tipoPalo;
    switch (valorNumPalo) {
        case 1:
            tipoPalo = "♥" 
            palo.innerHTML = `
                <div class="heart">
                    <p>${tipoPalo}</p>
                </div>`
            paloInf.innerHTML = `
                <div class="heart">
                    <p>${tipoPalo}</p>
                </div>`
            break;
        case 2:
            tipoPalo = "♠" 
            palo.innerHTML = `
                <div class="spade">
                    <p>${tipoPalo}</p>
                </div>`
            paloInf.innerHTML = `
                <div class="spade">
                    <p>${tipoPalo}</p>
                </div>`
            break;
        case 3:
            tipoPalo = "♣"
            palo.innerHTML = `
                <div class="club">
                    <p>${tipoPalo}</p>
                </div>`
            paloInf.innerHTML = `
                <div class="club">
                    <p>${tipoPalo}</p>
                </div>`
            break;
        case 4:
            tipoPalo = "♦"
            palo.innerHTML = `
                <div class="diamond">
                    <p>${tipoPalo}</p>
                </div>`
            paloInf.innerHTML = `
                <div class="diamond">
                    <p>${tipoPalo}</p>
                </div>`
            break;
        default:
            break;
    }
}

function ponerNumero(){
    let numCarta= obtenerNumero()
    valorCarta.innerHTML = 
    `<div class="numero">
        <p>${numCarta}</p>
    </div>`
}

function comenzar(){
    ponerPalo()
    ponerNumero()
}