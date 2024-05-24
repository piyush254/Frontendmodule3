function test(){
  console.log(this);
}

let obj1 = {
  name : 'Yash'
}

test.call(obj1);




function sum(a,b){
  console.log(this.name);
  return(a+b)
}

let obj3 ={
  name : 'Dipika'
}

let obj4 = {
  name : 'window',
}

let ans = sum.apply(obj1,[100, 5,90 , 7000]);

console.log(ans);

let ans3 = sum.call(obj3 , 100 ,180);
console.log(ans3);

let obj = {
  name : 'Piyush'
}

let ans2 = sum.call(obj);

console.log(ans2);