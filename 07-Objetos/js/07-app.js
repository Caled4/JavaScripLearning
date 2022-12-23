const producto={
    nombre:"monitor",
    precio : 500,
    disponible: true
}
producto.disponible=false
delete producto.precio
console.log(producto)