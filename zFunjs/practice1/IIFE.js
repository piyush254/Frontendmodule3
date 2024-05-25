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
  xyz: function () {
    console.log(name);
  },
};

obj.xyz();

/*

let  obj3 = {
  name : "Ram"
}

console.log(this.obj);

*/

// debouncing 
// Cotline
// func deligation
// dead temporal zone
// shadowing
// hosting
// Copy prototype

// this keyword is of 4 type
//  impiciate 
//  expliciate
//  new keyword binding
//  default binding

// Sallow copy 
// Deep copy

// Advance concept

// Event Propogation has 3 types
// capture face
// target face
// Bubbling face


// From Promises
// Agex

// we cannot change value in JSON

// infnity cuddyg

xyz()

var xyz = ()=> {console.log("Hi hello")}


// function xyz() {
//   console.log("Hi hello")
// }