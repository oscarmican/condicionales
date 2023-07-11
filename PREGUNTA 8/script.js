let calificacion = prompt ("coloque su nota")

if ( calificacion >= 1 && calificacion < 6) {
    alert ("reprobado")
} else if ( calificacion >= 6 && calificacion <= 8 ) {
    alert ("regular")
} else if ( calificacion == 9) {
    alert ("bien")
} else if ( calificacion == 10) {
    alert ("excelente")
} else {
    alert ("error por favor digite un numero entero entre 1 y 10")
}

