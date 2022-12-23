// los n primero numero de la serie
// 0,1,1,2,3,5,8,13
serie=[0,1]
n=4
for (i=1;serie.length<=n;i++){
    rpta=serie[i-1]+serie[i]
    serie.push(rpta)
}
console.log(serie)

// los primeros N primeros umero primos
let numero=[]
let n=3
for(i=0;numero.length= n;i++){
    if(i%2!=0){
        numero.push(i)
    }
}
console.log(numero)
// ejercicio 3
// ordenar un array
Array=[5,9,]