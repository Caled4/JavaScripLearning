const producto={
    nombre:"Monitor 30 Pulgadas",
    precio:200,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el prodducto: ${this.nombre} tiene el precio de: ${this.precio}`)
    }
}
const producto2={
    nombre:"tablet",
    precio:4165,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el prodducto: ${this.nombre} tiene el precio de: ${this.precio}`)
    }
}
producto.mostrarInfo()
producto2.mostrarInfo()