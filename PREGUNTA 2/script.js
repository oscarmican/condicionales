let numeroTexto = prompt("Ingrese un numero")
let residuo = numeroTexto % 2

if (residuo == 0) {
    alert("El numero " + numeroTexto + " es divisible entre 2")
} else  {
    alert("El numero " + numeroTexto + " no es divisible entre 2")
}