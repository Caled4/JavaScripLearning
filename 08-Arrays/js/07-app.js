const carrito=[]
// definir un producto

const producto={
    nombre:"monitor 546 pulgadas",
    precio: 509
}
const producto2={
    nombre:"celular",
    precio: 630
}
const producto3={
    nombre:"teclado",
    precio: 30
}


// agregar al final del array
carrito.push(producto2)
carrito.push(producto)

// agregar al inicio del array
carrito.unshift(producto3)
// mostrar array
console.table(carrito)

//eliminar ultimo elemento del array

// carrito.pop()

// console.table(carrito)
//eliminar del inicio del array(
// carrito.shift()
// console.table(carrito)

carrito.splice(0,1)
console.table(carrito)
