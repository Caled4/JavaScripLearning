const carrito=[
    {nombre:"monitor 27 pulgadas",precio:500},
    {nombre:"telivision",precio:100},
    {nombre:"tablet",precio:200},
    {nombre:"audifonos",precio:300},
    {nombre:"teclado",precio:400},
    {nombre:"celular",precio:700}
]
const nuevoArreglo=carrito.map((producto)=>{
    return `${producto.nombre}-Precio:${producto.precio}`
})

const nuevoArreglo2=carrito.forEach((producto)=>{
    console.log(`${producto.nombre}-Precio${producto.precio}`)
})

console.log(nuevoArreglo)
console.log(nuevoArreglo2)


