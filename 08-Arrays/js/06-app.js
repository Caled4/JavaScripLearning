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

// carrito.push(producto3)
let resultado

resultado=[...carrito,producto]
resultado=[...resultado,producto2]
resultado=[producto3, ...resultado]

console.table(resultado)
// console.table(carrito)

