const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','julio']
const carrito=[
    {nombre:'Monitor 27 Pulgadas',precio:500},
    {nombre:'Televisor',precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Audifonos',precio:300},
    {nombre:'Teclado',precio:400},
    {nombre:'Celular',precio:700}
]

meses.push('Agosto')
// console.log(meses)

// spread operator con arreglo de indices 
const meses2 = [...meses,'agosto']
// console.log(meses2)

const producto ={producto:'Disco Duro', precio:300}
const carrito2=[...carrito,producto]

console.log(carrito2)