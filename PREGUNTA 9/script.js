var topping = prompt ("¿que topping quieres?")
var helado = 50
var precio = helado


if ( topping == "oreo" ){
    precio = precio + 10
    alert ("el precio del helado es " + precio)
} else if ( topping == "kitkat" ){
    precio = precio + 15
    alert ("el precio del helado es " + precio)
}else if (topping == "brownie"){
    precio = precio + 20
    alert ("el precio del helado es " + precio)
}else{
    alert("no tenemos este topping, lo sentimos")
    alert ("el precio del helado es " + helado)
}
