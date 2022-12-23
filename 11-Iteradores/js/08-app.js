const pendientes=['tarea','comer','Proyecto','Estudia JavaScript']

for (let c of pendientes ){
    console.log(c)
}

const automovil = {
    modelo:'camaro',
   anio : 4561 ,
   motor: ' cilindrico de 2500cc'

}
// ---------------
for ( let v in automovil){
    console.log(`${automovil[v]}`)
}
// ------------------------
for (let [llave, valor]of Object.entries(automovil)){
    console.log(llave + valor)
}
// ------------------------


