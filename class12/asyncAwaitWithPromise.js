function promGen (condition , data , reason , timeout){
  console.log('inside promGen');
  return new Promise((resolve , rejected) => {
    setTimeout(() => {
      if (condition) {
        resolve(data)
      }
      else{
        rejected(reason)
      }
    }, timeout);
  })
}


async function getData(){
  try {
    console.log('inside getData');
    const res = await promGen(false , 'p1 pass' , 'p1 rejeccted' , 1000);
    console.log(res);
    console.log('After response');
    
  } catch (error) {
   console.log(error); 
  }
}

console.log('start');
getData();
console.log('end');