const item="monitor 20"
// console.log(item)
//      *contar los caracteres de un string
// console.log(item.length)
//      *para buscar en un estring 
//      indexOf retorna el inidice si existe sino -1
//      includes retorna True sino False
// console.log(item.indexOf('20'))

// console.log(item.includes('0'))
//------------------------------------------------------------
const producto="                monitor de 26 pulgadas             "

// console.log(producto)
// console.log(producto.length)

//      elminar espacio al inicio
// console.log(producto.trimStart())
//      eliminar espacio al final
// console.log(producto.trimEnd())
//      convinacion de trimStart y trimEnd
// console.log(producto.trimStart().trimEnd())
//      metodo antiguo
// console.log(producto.trim())
//------------------------------------------------------------
const mercancia="monitor de 686 pulgadas"
// console.log(mercancia)
//      remplazar valores dentro de un string
// console.log(mercancia.replace('monitor', "monitor curvo"))
//      *para cortar un string
//      slince el primer parametro debe de ser menor que el segundo
//      substring indentifica el parametro de valor mayor y lo asigna internamente como primero
//      chartAt corta solo un caracter del string
// console.log(mercancia.slice(0,12))
// console.log(mercancia.substring(12,0))
// console.log(mercancia.charAt(0))
//------------------------------------------------------------
const pantalla = "monitor 20 pulgadas "
//      repeat te va permitir repitir una cadena de texto
// console.log(pantalla.repeat(3))
//      split elimina un caracter ingresado como parametro y divide el string 
// const actividad="estoy aprendidiendo javaScript Moderno"
// console.log(actividad.split(" "))
//------------------------------------------------------------
//      convertir todo a mayusculas
const TV="MONITOR de 254 Pulgadas"
// console.log(TV.toUpperCase())
//      convertir todo a minusculas
// console.log(TV.toLowerCase())
