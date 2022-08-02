/* function saludar () {
    console.log("Hola, como estas?");
}

saludar() */

/* function suma(a, b) {
    let numero = a + b
    console.log(numero);
}
suma(2, 6)

let numeroA = parseInt(prompt("Ingresa un numero"))
let numeroB = parseInt(prompt("Ingresa un numero"))

suma(numeroA, numeroB) */

function porCadaUno(numeros,fn) {
   for (const el of numeros) {
    fn(el)
   }
}

let total = 3

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

porCadaUno (numeros, console.log)

porCadaUno(numeros, (numeros) => {total =+ numeros})

