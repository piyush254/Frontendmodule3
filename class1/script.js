/* let a = {
  x : 10,
  y : 20,
}


let b = a;


console.log(a);
console.log(b);

a.x = 60;
b.x = 70



console.log(a);
console.log(b);   */

/*let a = {
  x: 10,
  y: 20,
  z: 30
};

let b = {
  w: 100,
  ...a,
};

console.log(a);
console.log(b); */

// next concept

/*
let obj1 = {
  a: 10,
  b: {
    y: 20,
  },
};
const obj = JSON.stringify(obj1);
console.log(obj1);


const  obj2  = JSON.parse(obj)
console.log(obj);
console.log(obj2);

function f1() {
  console.log("Hello sir");
}

function f2() {
  console.log("Hello sir1");
}

function f3() {
  console.log("Hello sir2");
}

const arr = [{ f1, f2, f3 }];

arr.forEach(obj => {
  Object.values(obj).forEach(func => func()); // Access and call functions
});

console.log(arr);

*/

// next concept

const obj = {
  a: 10,
  b: 20,
};


for(key in obj){
  console.log(key);
  console.log(obj[key]);
}


// const obj = {
//   a: 10,
//   b: 20,
// };

// for (const key in obj) {
//   console.log(obj[key]); // Access the value using obj[key]
// }
