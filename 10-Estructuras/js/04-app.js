const dinero =300
const totalAPagar=800
const tarjeta = false
const cheque= true

if (dinero >= totalAPagar){
    console.log(`si podemos pagar`)
}else if (tarjeta){
    console.log(`si puedo pagar porque tengo la tarjeta`)
}else if (cheque){
    console.log(`si puedo pagar porque tengo cheque`)
}else{
    console.log(`fondos insuficientes`)
}