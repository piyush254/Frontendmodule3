

// Function.prototype.call = function(object, ...restPara){
//   // This keyword story
//   object.tempfn = this;
// }


// fn.call(obj,alpha , beta , gama);

// fn(...restPara)




Function.prototype.call = function(object,...restParam){
  // this keyword stores 
  object.tempFn = this;
  const result =  object.tempFn(...restParam);
  delete object.tempFn;
  return result;
}

let obj ={
  name: 'yash',
  city: 'noida',
}
function getDetails(){
  console.log(this.name +' '  + this.city);
  return 'hello';
}

console.log(getDetails());

console.log(getDetails.call(obj));


fn(...restParam);

let obj1 = {
    a:1,
    test(){
        console.log(this);
    }
}

// test is method of obj object

obj1.test();
// and we are invoking test using '.' notation
// this keyword inside test is obj

Function.prototype.test= function(){
    console.log(this);
}

function hello(){

}

hello.test();