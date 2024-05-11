function test(){
  console.log(this);
}

let obj1 = {
  name : 'Yash'
}

// test.call(obj1);




function sum(a,b){
  console.log(this);
  return(a+b)
}

let ans = sum(10, 5);


console.log(ans);

let obj = {
  name : 'Piyush'
}

let ans2 = sum.call(obj.name)