let i =0
a="Fizz"
b="Buzz"
while (i<100){
    if(i%3===0&&i%5===0){
        console.log(i+" "+a+b)
    }else if(i%3===0){
        console.log(i+" "+a)
    }else if(i%5===0){
        console.log(i+" "+b)
    }
    i++
}