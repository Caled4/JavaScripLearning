const producto={
    nombre:"monitor",
    precio : 500,
    disponible: true,
    informacion:{
        medidas:{
            peso:"1kg",
            medida:"2m"
        },
        fabricacion:{
            pais:"China"
        }
    }
}
console.log(producto)

console.log(producto.informacion.medidas.peso)
console.log (producto.informacion.fabricacion.pais)