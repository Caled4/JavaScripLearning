const usuario = false
const puedePagar=false

if (usuario&&puedePagar){
    console.log(`si puedes comprar`)
}else if(!usuario){
    console.log(`inicia sesion o saca una cuenta`)
}
else if(!puedePagar){
    console.log(`fondos insuficientes`)
}else{
    console.log(`no, no puedes comprar`)
}
