let username = ""
let usuarioLogueado = false
const autoss = "Peugeot 208, FIAT Cronos, VW Gol, Toyota Corolla"
const precio208 = 7500000
const precioCronos = 5000000
const precioGol = 6500000
const precioCorolla = 9000000

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
    alert(autoss)
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
        opcion = parseInt(prompt("Que desea hacer? Presione '1' para ver nuestro catalogo de autos, '2' para ver los precios y '3' para salir"))
        if (opcion === 1) {
            verAutos(autoss)
        }
        else if (opcion === 2) {
            let cantidadCuotas = 0
            precio = verPrecios()
            cantidadCuotas = parseInt(prompt("Cuantas cuotas queres? Hasta 💥24 cuotas SIN INTERES💥. A partir de la cuota 25 hay un %25 interes y a partir de la cuota 37 un %50"))
            calcularCuotas(cantidadCuotas, precio)
        }
        else if (opcion === 3) {
            alert("Adios!!")
            usuarioLogueado === false
            break
        }
    }
}