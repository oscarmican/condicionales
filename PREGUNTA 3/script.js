let numeroTexto = prompt("Ingrese un numero")
let residuo = numeroTexto % 2 

if (residuo == 0) {
    alert("El numero " + numeroTexto + " es par")
}

if (residuo != 0) {
    alert("El numero " + numeroTexto + " es impar")
}