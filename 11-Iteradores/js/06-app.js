// forEach
const pendientes = ['tarea','comer','proyecto','estudias javaScript']

pendientes.forEach((pendiente,index)=>{
    console.log(`${index}:${pendiente}`)
})


const carrito = [
    {nombre:'monitor 27 pulgadas',precio:500},
    {nombre:'television',precio:100},
    {nombre:'tablet',precio:200},
    {nombre:'audifonos',precio:300}
]

carrito.forEach((producto,index)=>{
    console.log(index +" : "+producto.nombre)
})