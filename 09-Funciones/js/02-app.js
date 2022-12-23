// declaracion de funcion-- imprime el valor de la funcion porque js hace dos leidas en realidad en la primera indentifica las funciones y hostea dando asi una ejecucion sin orden en linea es decir que podemos llamar la funcion antes de escribirla sin tener problemas al ejecutar
sumar()
function sumar(){
    console.log(2+2)
}
// expresion de funcion-- no imprime nada al llamar la funcion por en la primera leida la funcion, es vista como el valor de una variable l
// sumar2()
const sumar2=function(){
    console.log(3+3)
}