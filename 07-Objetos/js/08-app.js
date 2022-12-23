// uso estricto de buenas practicas 
"use strict"

const producto={
    nombre:"monitor",
    precio : 500,
    disponible: true
}

//congelamos el objeto
Object.freeze(producto)

// producto.disponible=false
// producto.imagen="imagen.jpg"
// delete producto.precio
console.log(producto)

// verificamos si esta congelado el objecto
console.log(Object.isFrozen(producto))