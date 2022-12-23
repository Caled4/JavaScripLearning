const carrito=[
    {nombre:'monitor 27 pulgadas',precio:200},
    {nombre:'television',precio:223},
    {nombre:"tablet",precio:100},
    {nombre:'audifonos',precio:300},
    {nombre:'celular',precio:506},
    {nombre:'teclado',precio:153}
]
// forEach recorre un arreglo  mostrando los valores de los campos
// carrito.forEach(function(producto){
//     console.log(`${producto.nombre}-Precio:${producto.precio}`)})
// map recorre un arreglo mostrando los valores de los campos y podiendo almacenar en otra variable
// carrito.map(function(producto){
//     console.log(`${producto.nombre}-Precio:${producto.precio}`)
// })

const nuevoArreglo=carrito.map(function(producto){
    return `${producto.nombre}-Precio:${producto.precio}`
})

const nuevoArreglo1=carrito.forEach(function(producto){
    return `${producto.nombre}-Precio:${producto.precio}`
})

// probamos imprimiendo el los arreglos y el forEach no almacena valos por lo que no imprime nada
console.table(nuevoArreglo)
console.table(nuevoArreglo1)

