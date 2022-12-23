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
            pais:"peru"
        }
    }
}
// const {pais}=producto.informacion.fabricacion
const{nombre,informacion,informacion:{fabricacion:{pais}}}=producto
console.log(nombre)
console.log(pais)