iniciarApp()

function iniciarApp(){
    console.log(`iniciando app...`)
    segundaFuncion()
}

function segundaFuncion(){
    console.log(`desde la segunda funcion`)

    usuarioAutenticado(`pablo`)
}

function usuarioAutenticado(usuario){
    console.log(`autenticando usuario... espere ...`)
    console.log(`usuario autenticado exitosamente ${usuario}...`)
}

