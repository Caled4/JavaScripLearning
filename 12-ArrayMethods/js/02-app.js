const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio']
const carrito=[
    {nombre:'Monitor 27 Pulgadas', precio:5000},
    {nombre:'Television',precio:100},
    {nombre:'Audifonos',precio:300},
    {nombre:'Teclado',precio:400},
    {nombre:'Celular',precio:700}
]
meses.forEach((mes,index)=>{
    // mes==='Abril'? console.log(`Encontrado en el indice ${index}`):null
})
// encontrar el indice de Abril
const indice=meses.findIndex(mes=>mes==='Diciembre')
// console.log(indice)

// encontrar un indice de un arreglo de objetos...
const inidice2=carrito.findIndex(producto =>producto.precio===100)
console.log(inidice2)