const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascota = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("Reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanmascota = document.getElementById("mascota-jugador")

const enemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataquesdeljugador = document.getElementById("ataques-del-jugador")
const ataquesdelenemigo = document.getElementById("ataques-del-enemigo")
const notificacion = document.getElementById("resultado")

const contenedorbotones = document.getElementById("contenedor-botones")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionVerMapa = document.getElementById("ver-mapa")
const sectionMapa = document.getElementById("mapa")

const anchoMaximoDelMapa = 100

let jugadorId = null
let xaliburz = []
let XaliburzEnemigo = []
let botones = []
let ataqueJugador = []
let ataqueAleatorio = []
let inputShikamaru 
let inputHimawari 
let inputLokillo
let inputNaruto 
let inputHinata 
let inputKawaki 
let botontierra 
let botonFuego 
let botonagua 
let ataquesXaliburzEnemigo
let indexAtaqueAleatorio 
let indexAtaqueJugador 
let mascotaJugador 
let mascotaJugadorObjeto
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = ""
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 400

alturaQueBuscamos = anchoDelMapa * 400 / 700
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

if (anchoDelMapa > anchoMaximoDelMapa){ 
    anchoDelMapa = anchoMaximoDelMapa - 400
}

class Xaliverse{
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarXaliburz(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
         )
    }
}



let Naruto = new Xaliverse("Naruto" , "./img/mokepons_mokepon_capipepo_attack.webp" , 5, "./capipepo.png")

let Hinata = new Xaliverse("Hinata" ,"./img/mokepons_mokepon_capipepo_attack.webp" , 5, "./capipepo.png")

let Shikamaru = new Xaliverse("Shikamaru" ,"./img/mokepons_mokepon_hipodoge_attack.webp" , 5, "./hipodoge.png" )

let Kawaki = new Xaliverse("Kawaki" ,"./img/mokepons_mokepon_hipodoge_attack.webp" , 5, "./hipodoge.png")

let Himawari = new Xaliverse("Himawari" ,"./img/mokepons_mokepon_ratigueya_attack.webp" , 5, "./ratigueya.png")

let lokillo = new Xaliverse("lokillo" ,"./img/mokepons_mokepon_ratigueya_attack.webp" , 5, "./ratigueya.png")


const Naruto_Ataques = [
{nombre: "💧", id: "boton-agua"},
{nombre: "💧", id: "boton-agua"},
{nombre: "💧", id: "boton-agua"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "🌱", id: "boton-tierra"},
]

const Hinata_Ataques = [ 
{nombre: "🔥", id: "boton-fuego"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "💧", id: "boton-agua"},
{nombre: "🌱", id: "boton-tierra"},
]

const Shikamaru_Ataques = [ 
{nombre: "🌱", id: "boton-tierra"},
{nombre: "🌱", id: "boton-tierra"},
{nombre: "🌱", id: "boton-tierra"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "💧", id: "boton-agua"},
]

const Kawaki_Ataques = [
{nombre: "💧", id: "boton-agua"},
{nombre: "💧", id: "boton-agua"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "🌱", id: "boton-tierra"},
]

const Himawari_Ataques = [
{nombre: "🌱", id: "boton-tierra"},
{nombre: "🌱", id: "boton-tierra"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "🔥", id: "boton-fuego"},
{nombre: "💧", id: "boton-agua"},
]

const Lokillo_Ataques = [ 
{nombre: "💧", id: "boton-agua"},
{nombre: "💧", id: "boton-agua"},
{nombre: "🌱", id: "boton-tierra"},
{nombre: "🌱", id: "boton-tierra"},
{nombre: "🔥", id: "boton-fuego"},
]

Naruto.ataques.push(...Naruto_Ataques)
    
Hinata.ataques.push(...Hinata_Ataques)

Shikamaru.ataques.push(...Shikamaru_Ataques)
    
Kawaki.ataques.push(...Kawaki_Ataques)

Himawari.ataques.push(...Himawari_Ataques)

lokillo.ataques.push(...Lokillo_Ataques)
    
xaliburz.push(Naruto, Hinata, Shikamaru, Kawaki, Himawari, lokillo)


function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    sectionReiniciar.style.display = "none"

    xaliburz.forEach((Xaliverse) => {
        opcionDeXaliburz = `
        <input type = "radio" name = "mascota" id=${Xaliverse.nombre} />
        <label class="tarjeta-xaliverse" for=${Xaliverse.nombre}>
            <p>${Xaliverse.nombre}</p>
            <img src= ${Xaliverse.foto} alt="${Xaliverse.nombre}">
        </label>
        `
    contenedorbotones.innerHTML += opcionDeXaliburz 

        inputShikamaru = document.getElementById("Shikamaru")
        inputHimawari = document.getElementById("Himawari")
        inputLokillo = document.getElementById("lokillo")
        inputNaruto = document.getElementById("Naruto")
        inputHinata = document.getElementById("Hinata")
        inputKawaki = document.getElementById("Kawaki")

})

    botonMascota.addEventListener("click", seleccionarmascota)
    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarmascota(){
    sectionSeleccionarMascota.style.display = "none"

    if (inputNaruto.checked){
        spanmascota.innerHTML = inputNaruto.id
        mascotaJugador = inputNaruto.id
    }else if (inputHinata.checked){
        spanmascota.innerHTML = inputHinata.id
        mascotaJugador = inputHinata.id
    }else if (inputShikamaru.checked){
        spanmascota.innerHTML = inputShikamaru.id
        mascotaJugador = inputShikamaru.id
    } else if (inputKawaki.checked){
        spanmascota.innerHTML = inputKawaki.id
        mascotaJugador = inputKawaki.id
    }else if (inputHimawari.checked){
        spanmascota.innerHTML = inputHimawari.id
        mascotaJugador = inputHimawari.id
    }else if (inputLokillo.checked){
        spanmascota.innerHTML = inputLokillo.id
        mascotaJugador = inputLokillo.id
    }else {
        alert("¡TIENES QUE SELLECIONAR TU MASCOTA!")
        reiniciarJuego()
    }

        seleccionarXaliburz(mascotaJugador)

        extraerAtaques(mascotaJugador)
        sectionVerMapa.style.display = "flex"
        iniciarMapa()
} 

function seleccionarXaliburz(mascotaJugador){
    fetch(`http://localhost:8080/xaliburz/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            xaliburz: mascotaJugador
        })
    })
         
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < xaliburz.length; i++) {
        if (mascotaJugador == xaliburz[i].nombre) {
            ataques = xaliburz[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataques) =>{
    ataquesXaliburz = `
    <button id=${ataques.id} class="boton-de-ataque BAtaque">${ataques.nombre}</button>
    `
        contenedorAtaques.innerHTML += ataquesXaliburz
    })

     botonFuego = document.getElementById("boton-fuego")
     botonagua = document.getElementById("boton-agua")
     botontierra = document.getElementById("boton-tierra")
     botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click" , (e) => {  
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            else{
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
 }

function seleccionarMascotaEnemiga() {
    let mascotaAleatorio = aleatorio(0, xaliburz.length -1)

    enemigo.innerHTML = xaliburz[mascotaAleatorio].nombre
    ataquesXaliburzEnemigo = xaliburz[mascotaAleatorio].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueEnemigo = aleatorio(0, ataquesXaliburzEnemigo.length -1)
    
    if (ataqueEnemigo == 0 || ataqueEnemigo == 1){
        ataqueAleatorio.push("FUEGO")
    }else if (ataqueEnemigo == 3 || ataqueEnemigo == 4){
        ataqueAleatorio.push("AGUA")
    }else {
        ataqueAleatorio.push("TIERRA")
    }

    console.log(ataqueAleatorio)
    IniciarPelea()
}

function IniciarPelea(){
    if (ataqueJugador.length == 5){
        combate()

}}

function indexAmbosOponente(jugador, enemigo){
    indexAtaqueAleatorio = ataqueAleatorio[enemigo]
    indexAtaqueJugador = ataqueJugador[jugador]

}

function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] == ataqueAleatorio[index]){
            indexAmbosOponente(index, index)
            Mensaje(" EMPATE")
            
        }
        else if (ataqueJugador[index] == "AGUA" && ataqueAleatorio[index] == "FUEGO"){
            indexAmbosOponente(index, index)
            Mensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] == "TIERRA" && ataqueAleatorio[index] == "AGUA"){
            indexAmbosOponente(index, index)
            Mensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] == "FUEGO" && ataqueAleatorio[index] == "TIERRA"){
            indexAmbosOponente(index, index)
            Mensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else {
            indexAmbosOponente(index,index)
            Mensaje(" PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVictorias()   


function revisarVictorias(){
    if (victoriasJugador == victoriasEnemigo) {
        MensajeFinal("ha sido un empate!!")

    } else if (victoriasJugador > victoriasEnemigo ) {
            MensajeFinal("!Felicidades Has Ganado El Combate! :)))")
    } else {
        MensajeFinal("Has Perdido loseeer VUELVE A INTENTARLO!!")
    }
}}

function Mensaje(resultado){

    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    notificacion.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueAleatorio

    ataquesdeljugador.appendChild(nuevoAtaqueJugador)
    ataquesdelenemigo.appendChild(nuevoAtaqueEnemigo)
}

function MensajeFinal(resultadoFinal){
    notificacion.innerHTML = resultadoFinal

    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function iniciarMapa() {

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown" , PresionarTecla)
    window.addEventListener("keyup" , detenerMovimiento )

}


function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarXaliburz()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    XaliburzEnemigo.forEach(function(xaliburz){
        xaliburz.pintarXaliburz()
    })

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(NarutoEnemigo)
        revisarColision(HinataEnemigo)
        revisarColision(ShikamaruEnemigo)
        revisarColision(KawakiEnemigo)
        revisarColision(lokilloEnemigo)
        revisarColision(HimawariEnemigo)
       
    }
 }

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/xaliburz/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then (function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ enemigos }) {
                    console.log(enemigos)
                    XaliburzEnemigo = enemigos.map(function (enemigo) {
                        let xaliburzEnemigo 
                        const xaliburzNombre = enemigo.nombre || "no sirve hermano"
                        if (xaliburzNombre == "Naruto") {
                            xaliburzEnemigo = new Xaliverse("Naruto" , "./img/mokepons_mokepon_capipepo_attack.webp" , 5, "./capipepo.png")

                        } else if (xaliburzNombre == "Hinata") {
                            xaliburzEnemigo = new Xaliverse("Hinata" ,"./img/mokepons_mokepon_capipepo_attack.webp" , 5, "./capipepo.png")
                            
                        } else if (xaliburzNombre == "Shikamaru") {
                            xaliburzEnemigo = new Xaliverse("Shikamaru" ,"./img/mokepons_mokepon_hipodoge_attack.webp" , 5, "./hipodoge.png")

                        } else if (xaliburzNombre == "Kawaki") {
                           xaliburzEnemigo = new Xaliverse("Kawaki" ,"./img/mokepons_mokepon_hipodoge_attack.webp" , 5, "./hipodoge.png")
                             
                        } else if (xaliburzNombre == "Himawari") {
                            xaliburzEnemigo = new Xaliverse("Himawari" ,"./img/mokepons_mokepon_ratigueya_attack.webp" , 5, "./ratigueya.png")

                        } else if (xaliburzNombre == "lokillo") {
                            xaliburzEnemigo = new Xaliverse("lokillo" ,"./img/mokepons_mokepon_ratigueya_attack.webp" , 5, "./ratigueya.png")
                        }

                        return xaliburzEnemigo
                    })
                })
            }
    })
                  
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}


function PresionarTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break

        case "ArrowDown":
            moverAbajo()
            break

        case "ArrowLeft":
            moverIzquierda()
            break

        case "ArrowRight":
            moverDerecha()
            break
    
        default:
            break
    }
}

function obtenerObjetoMascota() {
    for (let i = 0; i < xaliburz.length; i++) {
        if (mascotaJugador == xaliburz[i].nombre) {
            return xaliburz [i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex" 
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemiga(enemigo)

}

window.addEventListener("load",iniciarJuego)