const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Comprobar si un valor existe en un arreglo
meses.forEach((x)=>{
    // x=='Enero'?console.log(x):null
})
const resultado=meses.includes('diciembre')
// console.log(resultado)


// en un arreglo de objetos se utiliza .some
const existe=carrito.some( producto =>{
    return producto.nombre==='monitor curvo'
})
// console.log(existe)
// ---------------------
// en un arreglo de objetos se utiliza .some
const existe2=carrito.some(producto=>producto.nombre==='monitor curvo')
// console.log(existe2)
// -----------------
// en un arreglo tradicional con .some
const existe3=meses.some(mes=>mes==='febrero')
console.log(existe3) 
