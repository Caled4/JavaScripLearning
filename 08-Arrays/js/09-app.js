const carrito=[
    {nombre: "monitor de 43 pulgadas",precio:680},
    {nombre: "celular",precio:872},
    {nombre: "lapto",precio:4983},
    {nombre: "teclado",precio:83}
]
console.table(carrito)

for(let i=0;i<carrito.length;i++){
    // console.log(i)
    // console.log(`${carrito[i].nombre} - precio ${carrito[i].precio}`)
}
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio ${producto.precio}`)

})
