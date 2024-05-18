// Colosur is a function  plus lexical scope


/**
 
The function `Closure` returns a closure that increments and logs a variable `i` each time it is
called.
@returns A closure is being returned. The closure is a function that increments the variable `i`
Each time it is called and then logs the updated value of `i` to the console.

**/

function Closur (){
  let i = 0; 
  return function (){
    i++ ;
    console.log(i);
  }
}

let count1 = Closur();
let count2 = Closur();



count1()
count1()

count2()
count2()
count2()