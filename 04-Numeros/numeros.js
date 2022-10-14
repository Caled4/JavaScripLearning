const numero1= "30";
console.log(numero1)
const numero2= '20.4';
console.log(numero2)
const numero3= -62;
console.log(numero3)
let resultado
let puntaje =0

// conversion a numero entero
console.log(Number.parseInt(numero1)) 
//conversion a numero flotante
console.log(Number.parseFloat(numero2))
//revisar si un numero es entero o no
console.log(Number.isInteger(numero2))

//suma
resultado= numero1+numero2
//resta
resultado=numero1-numero2
//multiplicacion
resultado = numero1*numero2
//division
resultado=numero1/numero2
//modulo
resultado= numero1%numero2
console.log(resultado)

/*
ORDEN DE EJECUCION DE OPERADORES
    primero lo que esta dentro de signos de agrupacion
    segundo * y /
    tercero + y -
*/

//incremento predeterminado 
puntaje ++
++puntaje
puntaje +=6

//decremento predeterminado
puntaje--
--puntaje
puntaje-=2

console.log(puntaje)

//valor de PI
resultado=Math.PI
//redondear
resultado=Math.round(2.6)
//redondeo forzado hacia arriba
resultado=Math.ceil(2.1)
//redondeo forzado hacia abajo
resultado=Math.floor(2.9)
//Raiz cuadrada
resultado=Math.sqrt(143)
//absoluto
resultado=Math.abs(-55)
//potentia
resultado=Math.pow(2,4)
//buscar el valor minimo
resultado=Math.min(3,8,7,6,1,-3)
//buscar el valor maximo
resultado=Math.max(3,8,7,6,1,-3)
//aleatorio
resultado=Math.random()
//aleatorio dentro de un rango "30"
resultado=Math.floor(Math.random()*30)
console.log(resultado)