const producto={
    nombre:"monitor de 24 pulgadas",
    precio: 1556,
    disponible: true
}
// .key muestra los campos de nuestro objeto sin valores
// console.log(Object.keys(producto))

// .values muestra los valores de los campos en el objeto
// console.log(Object.values(producto))

// .entries devuelve los campos y valores de en pares dentro de un array
console.log(Object.entries(producto))