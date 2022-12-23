// object literal
const producto={
    nombre:"Monitor 30 Pulgadas",
    precio:200,
    disponible: true,
}
// console.log(producto)


// object constructor
function  Producto(nombre,precio){
    this.nombre=nombre
    this.precio=precio
    this.disponible=true
}
const Producto2=new Producto("lata vacia", 45)
console.log(Producto2)
const Producto3=new Producto("leche", 9668)
console.log(Producto3)