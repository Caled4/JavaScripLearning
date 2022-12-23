// switch case
const metodoPago=`cheque`

switch(metodoPago){
    case 'efectivo':
        console.log(`pagaste con ${metodoPago}`)
        break
    case `cheque`:
        console.log(`pagaste con ${ metodoPago}`)
        break
    default:
        console.log(`aun no has seleccionado un metodo de pago o metodo de pago no soportado`)
}