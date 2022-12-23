const producto={
    nombre:"monitor 20 pulgadas",
    precio: 3000,
    diponible : true
}
// detructuring
const { nombre}=producto
console.log(nombre)

// destructuring con arrays
const numeros=[10,20,30,40,50]
const [,,numero]=numeros
console.log(numero)