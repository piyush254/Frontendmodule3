/*
(function (name) {
  console.log(`Hi my name is ${name}`);
})("Ankit");
((city) => {
  console.log(`I am from ${city}`);
})("Delhi") */

/*
function hof() {
  console.log(`${this.name}`);
  const f1 = this
  console.log(this.__proto__);
  return function () {
    console.log(`Hi my name is ${f1.name}`);
  };
}

 obj = {
  name: "Piyush",
};
obj2 = {
  name: "Ankit",
};
obj3 = {
  name: "Raju",
};

let fun1 = hof.call(obj3);

fun1();

*/

const fn = () => console.log(this);

fn();

// const fn1 = function (){
//   console.log(this.name);
// }

obj = {
  name: "Piyush",
  fun1: function () {
    console.log(this);
  },
  fun2 : ()=>{
    console.log(this.name);
  }
};

obj.fun1();
obj.fun2();

/*

let  obj3 = {
  name : "Ram"
}

console.log(this.obj);

xyz()

var xyz = ()=> {console.log("Hi hello")}
*/

// function xyz() {
//   console.log("Hi hello")
// }

(function(x ,y){
  console.log(x*y);
})(10, 5)