const puntaje =1000
const puntaje2="1000"

console.log(typeof puntaje)
console.log(typeof puntaje2)

if(puntaje != 1000){ //!= es diferente a ^^ == es igual a
    console.log(`si es difeerente`)
}

if(puntaje != "1000"){
    console.log(`si es diferente!`)
}else{
    console.log(`no no es diferente`)
}
// == operador que no es estricto
//  === operador estricto