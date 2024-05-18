function Closur (){
  let i = 0; 
  return function count (){
    i ++;
    console.log(i);
  }
}

let count = Closur()


count()
count()
count()
count.reset()
count()
count()
count()