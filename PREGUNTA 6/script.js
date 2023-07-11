let numero1 = parseInt(prompt("ingrese un numero"))
let numero2 = parseInt(prompt("ingrese un numero"))
let numero3 = parseInt(prompt("ingrese un numero"))



if (numero1 > numero2 && numero1 > numero3) {
    alert("el numero " + numero1 + " es el numero mayor")
} else if (numero2 > numero1 && numero2 > numero3) {
    alert("el numero " + numero2 + " es el numero mayor");
} else if (numero3 > numero2 && numero3 > numero1) {
    alert("el numero " + numero3 + " es el numero mayor");
} else if (numero1 === numero2 && numero1 > numero3) {
    alert("el numero" + numero1 + "es igual que" + numero2 + "pero el numero" + numero1 + "es mayor" + numero3)
} else if (numero2 === numero3 && numero2 > numero1) {
    alert("el numero " + numero2 + "es igual que " + numero3 + " pero el numero" + numero2 + " es mayor" + numero1);
} else {
    alert("todos los numeros son iguales");
}
