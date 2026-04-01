// |--- 1. CONFIGURACIÓN Y DOM ---|
// --- 1.1 ATAJOS / HELPERS
const $ = (ID) => document.querySelector(ID)

//1.2 VARIABLES GLOBALES
const btnSeleccionarMascotaJugador = $("#btn-seleccionar-mascota")
const btnFuego = $("#boton-fuego")
const btnAgua = $("#boton-agua")
const btnTierra = $("#boton-tierra")
const spnAtaqueJugador = $("#ataque-jugador")
const spnAtaqueEnemigo = $("#ataque-enemigo")

//1.3 VARIABLES DINAMICAS
let name;
let vidas = 3
let vidasEnemigo = 3
let mascotaEnemiga = ""
let mascotaJugador = ""
let ataqueJugador = ""
let ataqueEnemigo = ""

// |--- 2. LÓGICA FUNCIONES ---|
// --- 2.1 FUNCION ALEATORIEDAD
function Aleatoriedad(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

// --- 2.2 FUNCION SELECCIÓN DE LA MASCOTA DEL JUGADOR
function seleccionarMascotaJugador() {

    const inputHipodoge = $("#hipodoge")
    const inputCapipepo = $("#capipepo")
    const inputRatigueya = $("#ratigueya")
    const idMascotaJugador = $("#mascota-jugador")

    if (inputHipodoge.checked) {
        mascotaJugador = "Hipodoge"
        idMascotaJugador.textContent = mascotaJugador
    } else if (inputCapipepo.checked) {
        mascotaJugador = "Capipepo"
        idMascotaJugador.textContent = mascotaJugador
    } else if (inputRatigueya.checked) {
        mascotaJugador = "Ratigueya"
        idMascotaJugador.textContent = mascotaJugador
    }

    seleccionarMascotaEnemigo()
}

// --- 2.3 FUNCION SELECCIÓN DE LA MASCOTA DEL ENEMIGO
function seleccionarMascotaEnemigo() {
 
    const idMascotaEnemiga = $("#mascota-enemiga")
    let mascotaAleatoriaEnemiga = Aleatoriedad(1, 3)
    
    if (mascotaAleatoriaEnemiga == 1) {    
        mascotaEnemiga = "Hipodoge"
        idMascotaEnemiga.textContent = mascotaEnemiga
    }
    else if (mascotaAleatoriaEnemiga == 2) {
        mascotaEnemiga = "Capipepo"
        idMascotaEnemiga.textContent = mascotaEnemiga
    }
    else if (mascotaAleatoriaEnemiga == 3) {
        mascotaEnemiga = "Ratigueya"
        idMascotaEnemiga.textContent = mascotaEnemiga
    }

}

// --- 2.4 FUNCIONES DE LOS ATAQUES DEL JUGADOR
function ataqueAguaJugador() {
    
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()

}

function ataqueFuegoJugador() {
    
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()

}

function ataqueTierraJugador() {
    
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()

}

// --- 2.5 FUNCION ATAQUE ALEATORIO DEL ENEMIGO
function ataqueAleatorioEnemigo() {
 
    let ataqueAleatorio = Aleatoriedad(1, 3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }   

    logicaCombate()

}

// --- 2.6 FUNCION LOGICA DEL COMBATE
function logicaCombate() {
        
    if (ataqueJugador === ataqueEnemigo) {
        anuncioCombate("Empate")
    }else if (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") {
        anuncioCombate("Ganaste")
    }else if (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") {
        anuncioCombate("Ganaste")
    }else if (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") {
        anuncioCombate("Ganaste")
    }else {
        anuncioCombate("Perdiste")                                                                                                                                                          
    }
}

// --- 2.7 FUNCION ANUNCIO DEL COMBATE
function anuncioCombate(resultadoCombate) {

    const sAnuncioCombate = $("#anuncio-combate")

    let parrafo = document.createElement("p") 
    parrafo.innerHTML = mascotaJugador + " ataco con " + ataqueJugador + " y " + mascotaEnemiga + " ataco con " + ataqueEnemigo + " - " + resultadoCombate

    sAnuncioCombate.appendChild(parrafo)

}


// |--- 3. EVENTOS ---|
btnSeleccionarMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
btnFuego.addEventListener("click", ataqueFuegoJugador)
btnAgua.addEventListener("click", ataqueAguaJugador)
btnTierra.addEventListener("click", ataqueTierraJugador)



