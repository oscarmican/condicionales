let programa = prompt("¿que tipo de curso quieres aplicar? course / carrera / master")
let beca = prompt("¿cuentas con alguna beca? facebook / google / jesua ")
let precio = getPrecio(programa)
let porcentajePago = getPorcentajePago(beca)
let meses = getDuracion(programa)
let total = (precio * meses * porcentajePago).toFixed(1)
alert ("el costo del programa educativo es " + total + " mxn" )

function getPorcentajePago(tipoDescuento) {
    let porcentajePago = 1
    switch (tipoDescuento) {
        case 'facebook':
            porcentajePago -= 0.2 
            break
        case 'google':
            porcentajePago -= 0.15
            break
        case 'jesua':
            porcentajePago -= 0.5
            break
    }
    return porcentajePago
}
function getDuracion(tipoCurso) {
    let meses = 0
    switch (tipoCurso) {
        case 'course':
            meses = 2
            break
        case 'carrera':
            meses = 6
            break
        case 'master':
            meses = 12
            break
    }
    return meses
}

function getPrecio(tipoCosto) {
    let valor = 0
    switch (tipoCosto) {
        case 'course':
            valor = 4999
            break
        case 'carrera':
            valor = 3999
            break
        case 'master':
            valor = 2999
            break
    }
    return valor
}
