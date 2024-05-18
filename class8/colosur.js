function Closur (){
  let count = 0; 
  return function (){
    count ++;
    console.log(count);
  }
}

let count1 = Closur()
let count2 = Closur()

count1()
count1()
count1()



count2()
count2()
count2()

