"use strict"

const producto={
    nombre:"monitor",
    precio : 500,
    disponible: true
}
//congela el objeto haciendo que no se pueda agregar mas valores pero si deja modificar los existentes
Object.seal(producto)
producto.disponible=false
// producto.imagen="imagen de panda"
console.log(producto.nombre)