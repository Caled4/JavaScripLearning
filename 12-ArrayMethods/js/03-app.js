const carrito=[
    {nombre:'Monitor 27 Pulgadas',precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet',precio: 300},
    {nombre:'Audifonos',precio:299},
    {nombre:'Teclado',precio:400},
    {nombre:'Celular',precio:700}
]
// con un foreach
let total=0
carrito.forEach(producto=>total+=producto.precio)
console.log(total)


// con reduce 
let resultado=carrito.reduce((total,producto)=>total+producto.precio,01)
console.log(resultado)