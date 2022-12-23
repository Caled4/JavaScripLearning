// Fizz Buzz - 100 Numeros
// 3 6 9 12 ... Fizz
// 5 10 15 20 ... Buzz 
// 15 30 45 ... FizzBuzz! 
a="Fizz"
b="Buzz"
for(let i=1;i<100;i++){
    if(i%3===0&&i%5===0){
        console.log(i+" "+a+b)
    }else if(i%3===0){
        console.log(i+" "+a)
    }else if(i%5===0){
        console.log(i+" "+b)
    }
}


