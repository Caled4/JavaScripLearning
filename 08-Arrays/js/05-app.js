const meses=['enero','febrero','marzo','abril','mayo','junio','julio']

//agregar al final del arreglo
meses.push('abril')
meses.push('noviembre')

// console.table(meses)
// -------------------------------------------
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


console.table(carrito)

