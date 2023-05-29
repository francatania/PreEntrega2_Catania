let username = ""
let usuarioLogueado = false
const autoss = "Peugeot 208, FIAT Cronos, VW Gol, Toyota Corolla"
const precio208 = 7500000
const precioCronos = 5000000
const precioGol = 6500000
const precioCorolla = 9000000

class Autos {
    constructor(id, marca, nombre, precio, stock) {
        this.id = id
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const autos = [{ id: 1327, marca: "Peugeot", nombre: "208", precio: 7500000, stock: 13 },
{ id: 1327, marca: "Peugeot", nombre: "308", precio: 9500000, stock: 10 },
{ id: 1327, marca: "FIAT", nombre: "Cronos", precio: 5500000, stock: 24 },
{ id: 1327, marca: "FIAT", nombre: "Argo", precio: 6200000, stock: 17 },
{ id: 1327, marca: "VW", nombre: "Gol Trend", precio: 700000, stock: 11 },
{ id: 1327, marca: "Toyota", nombre: "Corolla", precio: 9500000, stock: 12 },
{ id: 1327, marca: "VW", nombre: "Golf", precio: 8300000, stock: 15 }]

function login() {
    username = prompt("Ingresa tu usuario.")
    password = prompt("Ingresa tu contraseña.")
    if (username.trim() !== "" && password.trim() !== "") {
        alert("✅ BIENVENID@ " + username)
        usuarioLogueado = true
    }
    else {
        alert("❌ USUARIO NO VALIDO")
    }
}

function verAutos() {
    autos.forEach((auto) => console.log(auto.marca + " " + auto.nombre + " " + "$" + auto.precio + " " + auto.stock))
}

function agregarAutos() {
    let id = Math.random * 1000
    let marca = prompt("Marca: ")
    let nombre = prompt("Nombre: ")
    let precio = parseFloat(prompt("Precio: "))
    let stock = parseInt(prompt("Cuanto stock vas a agregar?: "))
    let autoNuevo = new Autos(id.toFixed(0), marca, nombre, precio, stock)
    autos.push(autoNuevo)
    verAutos()
}

function agregarStock() {
    let nombre = prompt("A que auto queres agregar stock?")
    let buscador = autos.findIndex(auto => auto.nombre == nombre)
    let stock = 0
    if (buscador != -1) {
        stock = parseInt(prompt("Cuanto vas a agregar?"))
        autos[buscador].stock += stock
        verAutos()
    }
    else {
        console.warn("No se encontró el auto")
    }
}

function verPrecios() {
    eleccion = prompt(("Elija el auto: 1 para 'Peugeot 208', 2 para 'FIAT Cronos', 3 para 'VW Gol' y 4 para 'Toyota Corolla'"))
    switch (eleccion) {
        case "1":
            alert("El precio es de $7500000")
            return precio208
        case "2":
            alert("El precio es de $5000000")
            return precioCronos
        case "3":
            alert("El precio es de $6500000")
            return precioGol
        case "4":
            alert("El precio es de $9000000")
            return precioCorolla
        default:
            alert("❌Error. Elegir entre el 1 y 4.")
            break
    }
}

function calcularCuotas(cuotas, precio) {
    let precioCuota
    let interes1 = 1.25
    let interes2 = 1.50
    if (cuotas < 25) {
        precioCuota = (precio / cuotas)
        for (let i = 0; i < cuotas; i++) {
            console.log("cuota " + (i + 1) + ":" + precioCuota)
        }
    }
    else if (cuotas < 37 && cuotas > 24) {
        for (let i = 0; i < cuotas; i++) {
            if (i < 24) {
                precioCuota = (precio / cuotas)
                console.log("cuota " + (i + 1) + ":" + precioCuota)
            }
            else {
                precioCuota = (precio * interes1) / cuotas
                console.log("cuota " + (i + 1) + ":" + precioCuota)
            }
        }
    }
    else {
        for (let i = 0; i < cuotas; i++) {
            if (i < 24) {
                precioCuota = (precio / cuotas)
                console.log("cuota " + (i + 1) + ":" + precioCuota)
            }
            else if (i >= 24 && i < 37) {
                precioCuota = (precio * interes1) / cuotas
                console.log("cuota " + (i + 1) + ":" + precioCuota)
            }
            else {
                precioCuota = (precio * interes2) / cuotas
                console.log("cuota " + (i + 1) + ":" + precioCuota)
            }
        }

    }
}

function abrirMenu() {
    login()
    while (usuarioLogueado) {
        let opcion = 0
        opcion = parseInt(prompt("Que desea hacer? Presione '1' para ver nuestro catalogo de autos, '2' para calcular cuotas, '3' para agregar autos (ADMIN) y '4' para agregar stock (admin) y '5 para salir"))
        if (opcion === 1) {
            verAutos()
        }
        else if (opcion === 2) {
            let cantidadCuotas = 0
            precio = verPrecios()
            cantidadCuotas = parseInt(prompt("Cuantas cuotas queres? Hasta 💥24 cuotas SIN INTERES💥. A partir de la cuota 25 hay un %25 interes y a partir de la cuota 37 un %50"))
            calcularCuotas(cantidadCuotas, precio)
        }
        else if (opcion === 3 && username === "admin") {
            agregarAutos()
        }
        else if (opcion === 4 && username === "admin") {
            agregarStock()
        }
        else if (opcion === 5) {
            alert("Adios!!")
            usuarioLogueado === false
            break
        }
    }
}