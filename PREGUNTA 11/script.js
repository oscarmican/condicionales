let tipoVehiculo = prompt ("¿que tipo de vehiculo se uso?")
let recorridoKm = prompt ("¿cuantos km recorrio el vehiculo?")
let litrosConsumidos = prompt ("¿cuantos litros gasto?")
let precio = getPrecioKm (tipoVehiculo)
let cargo = getCargoExtraLitro(litrosConsumidos)
let totalPagar = (precio * recorridoKm) + cargo
alert ("el total a pagar es de " + totalPagar )


function getPrecioKm(vehiculo) {
    let precio = 0
    switch (vehiculo) {
        case 'coche':
            precio = 0.20
            break;
        case 'moto':
            precio = 0.10
            break;
        case 'autobus':
            precio = 0.5
            break;
    }
    return precio
}
function getCargoExtraLitro(litros) {
    let cargoExtra = 0
    if (litros > 0 && litros <= 100) {
        cargoExtra = 5
     
    } else if ( litros > 100){
        cargoExtra = 10
    }
    return cargoExtra
} 
