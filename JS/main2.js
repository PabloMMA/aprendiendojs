function Producto(nombre, precio, stock, categoria){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.categoria = categoria
}

const servicio1 = new Producto("Channel Manager (Para Grupos)", 900, 20)
const servicio2 = new Producto("Motor De Reservas (Para Grupos)", 700, 20)
const servicio3 = new Producto("Shopper (Para Grupos)", 650, 20)


/* let servicio1 = "Channel Manager (Para Grupos)"
let precioServicio1 = 900
let cantidadHoteles1 = 20

let servicio2 = "Motor De Reservas (Para Grupos)"
let precioServicio2 = 700
let cantidadHoteles2 = 20

let servicio3 = "Shopper (Para Grupos)"
let precioServicio3 = 650
let cantidadHoteles3 = 20 */

let listaServicioss = [servicio1, servicio2, servicio3]

let kitServicios = prompt("Cuantos Servicios Necesitas para tu Grupo de hoteles: \n- Channel Manager (Para Grupos)\n- Motor De Reservas (Para Grupos)\n- Shopper (Para Grupos)")
let precioTotal = 0;

function presupuesto(cantidad, precio){
    precioTotal += cantidad * precio
}

function presupuestoGrupo(cantidad, stock, precio){
    if(stock >= cantidad){
        presupuesto(cantidad, precio)
        alert("El presupuesto final es de: $" + (cantidad * precio))
    }
    else{
        alert("No podemos procesar su solicitud, nuestra disponibilidad es para antender hasta: " + stock + " hoteles")
    }
}

for(let i = 0; i < cantidadCompras; i++){

    let presupuesto1 = prompt("Ingrese el nombre del producto que quiere comprar: \n- Channel Manager (Para Grupos)\n- Motor De Reservas (Para Grupos)\n- Shopper (Para Grupos)")
    let grupoHotelero = prompt("Cuantos hoteles tiene tu grupo?:")

    if(presupuesto1 == "Channel Manager (Para Grupos)"){
        calculoStock(servicio1, precioServicio1, cantidadHoteles1)
    }
    else if(presupuesto1 == "Motor De Reservas (Para Grupos)"){
        calculoStock(servicio2, precioServicio2, cantidadHoteles2)
    }
    else if(presupuesto1 == "Shopper (Para Grupos)"){
        calculoStock(servicio3, precioServicio3, cantidadHoteles3)
    }
    else{
        alert("Aún no tenemos ese Servicio disponible")
    }
}

switch(true){
    case precioTotal < 8000:
        precioTotal = precioTotal * 0.90
        alert("Beneficio Bronce con descuento del 10% aplicado")
        break;
    case precioTotal < 15000:
        precioTotal = precioTotal * 0.80
        alert("Beneficio Plata con descuento del 20% aplicado")
        break;
    case precioTotal > 15000:
        alert("Beneficio Bronce con descuento del 30% aplicado")
        precioTotal = precioTotal * 0.70
        break;
    default:
        console.log(precioTotal)
        alert("Intenta Nuevamente");
        break;
}



alert("Gracias por elegirnos, uno de nuestros agentes te contactaraá pronto. Tu presupuesto hasta ahora es de: " + precioToTalConImpuestos)