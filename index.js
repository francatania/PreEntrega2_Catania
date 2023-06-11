let username = ""
let password = ""
let usuarioLogueado = false

class Autos {
    constructor(id, marca, nombre, precio, stock) {
        this.id = id
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    verStock(){
        console.warn("Hay ", this.stock, " unidades de ", this.nombre)
    }
    verPrecio(){
        console.log("El precio es de ", "$", this.precio)
    }
}

const autos = [{ id: 1327, marca: "Peugeot", nombre: "208", precio: 7500000, stock: 13 },
{ id: 1328, marca: "Peugeot", nombre: "308", precio: 9500000, stock: 10 },
{ id: 1329, marca: "FIAT", nombre: "Cronos", precio: 5500000, stock: 24 },
{ id: 1330, marca: "FIAT", nombre: "Argo", precio: 6200000, stock: 17 },
{ id: 1331, marca: "VW", nombre: "Gol Trend", precio: 700000, stock: 11 },
{ id: 1332, marca: "Toyota", nombre: "Corolla", precio: 9500000, stock: 12 },
{ id: 1333, marca: "VW", nombre: "Golf", precio: 8300000, stock: 15 },
{ id: 1334, marca: "VW", nombre: "Fox", precio: 4300000, stock: 20 },
{ id: 1335, marca: "FIAT", nombre: "Mobi", precio: 5300000, stock: 28 }]

function login() {
    username = prompt("Ingresa tu usuario. ('admin' para tener todas las funciones)")
    password = prompt("Ingresa tu contraseña. ('admin' para tener todas las funciones)")
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
    console.log(" ")
}

function agregarAutos() {
    let id = Math.random * 10000
    let marca = prompt("Marca: ")
    let nombre = prompt("Nombre: ")
    let precio = parseFloat(prompt("Precio: "))
    let stock = parseInt(prompt("Cuanto stock vas a agregar?: "))
    let autoNuevo = new Autos(id.toFixed(0), marca, nombre, precio, stock)
    autos.push(autoNuevo)
    autoNuevo.verPrecio()
    autoNuevo.verStock()
}

function agregarStock() {
    let nombre = prompt("A que auto queres agregar stock?")
    let buscador = autos.findIndex(auto => auto.nombre.toUpperCase() == nombre.toUpperCase())
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

function recorrerPrecios(){
    for (let auto of autos) {
        console.log(auto.nombre + " " + "$" + auto.precio)
    }
    console.log(" ")
}

function verPrecios() {
    recorrerPrecios()
    let buscador = prompt("Escribí el auto que querés: ")
    let eleccion = buscador.toUpperCase()
    let buscadorPrecio = autos.find(auto => auto.nombre.toUpperCase() === eleccion)
    return buscadorPrecio.precio
}

function verPreciosPorMarca(){
    let marca = ""
    marca = prompt("Escribí la marca que querés filtrar: ")
    let autosFiltrados = autos.filter(auto => auto.marca.toUpperCase() === marca.toUpperCase())
    if(autosFiltrados != ""){
        for(let auto of autosFiltrados){
            console.log(auto.nombre + " " + "$" + auto.precio)
        }
    }
    else{
        console.log("No se encontraron autos con la marca que escribiste.")
    }   
}

function cuotasHasta24(precioCuota, precio, cuotas){
    precioCuota = (precio / cuotas)
    for (let i = 0; i < cuotas; i++) {
        console.log("cuota " + (i + 1) + ":" + " " + "$" + precioCuota.toFixed(0))
    }
}

function cuotasHasta36(precioCuota, precio, cuotas, interes){
    for (let i = 0; i < cuotas; i++) {
        precioCuota = (precio * interes) / cuotas
        console.log("cuota " + (i + 1) + ":" + " " + "$" + precioCuota.toFixed(0))
    }
}

function cuotasMasDe36(precioCuota, precio, cuotas, interes){
    for (let i = 0; i < cuotas; i++) {
        precioCuota = (precio * interes) / cuotas
        console.log("cuota " + (i + 1) + ":" + " " + "$" + precioCuota.toFixed(0))
    }
}

function calcularCuotas(cuotas, precio) {
    let precioCuota = 0
    let interes1 = 1.25
    let interes2 = 1.50
    if (cuotas < 25) {
        cuotasHasta24(precioCuota, precio, cuotas)
    }
    else if (cuotas < 37 && cuotas > 24) {
        cuotasHasta36(precioCuota, precio, cuotas, interes1)
    }
    else {
        cuotasMasDe36(precioCuota, precio, cuotas, interes2)
    }
}

function activarOpcion2(){
    let cantidadCuotas = 0
    let precio = verPrecios()
    cantidadCuotas = parseInt(prompt("Cuantas cuotas queres? Hasta 💥24 cuotas SIN INTERES💥. A partir de la cuota 25 hay un %25 interes y a partir de la cuota 37 un %50 en el precio total del auto."))
    calcularCuotas(cantidadCuotas, precio)
}

function activarOpcion4(){
    if (username === "admin" && password === "admin") {
        agregarAutos()
    }
    else {
        alert("Usted no es admin.")
    }
}

function activarOpcion5(){
    if (username === "admin") {
        agregarStock()
    }
    else {
        alert("Usted no es admin.")
    }
}

function salir(){
    alert("Adios!!")
    usuarioLogueado = false
}

function abrirMenu() {
    login()
    while (usuarioLogueado) {
        let opcion = 0
        opcion = parseInt(prompt("Que desea hacer? Presione '1' para ver nuestro catalogo de autos, '2' para calcular cuotas, '3' para filtrar por marca, '4' para agregar autos (admin) y '5' para agregar stock (admin) y '6' para salir"))
        if (opcion === 1) {
            verAutos()
        }
        else if (opcion === 2) {
            activarOpcion2()
        }
        else if(opcion === 3){
            verPreciosPorMarca()
        }
        else if (opcion === 4) {
            activarOpcion4()
        }
        else if (opcion === 5) {
            activarOpcion5()
        }
        else if (opcion === 6) {
            salir()
            break
        }
    }
}

abrirMenu()