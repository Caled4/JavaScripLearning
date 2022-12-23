const producto={
    nombre:"Monitor 30 Pulgadas",
    precio:200,
    disponible: true
}
const medidas={
    peso:"1KG",
    medida:"1M"
}

// console.log(producto)
// console.log(medidas)

const resultado = Object.assign(producto,medidas)

// spreead operador o rest operador
const resultado2={...producto,...medidas}

// console.log(resultado)
console.log(resultado2)