let arr = [1, 2, 3];

let arr2 = new Array();
for (let i = 1; i <= 3; i++) {
  arr2.push(i);
}
// console.log(arr2);

// Array is combination of obj and proto

function parent() {}

const child = new parent();

// console.log(parent.prototype === child.__proto__);

// const child = 'This is a proto child'

let obj1 = {
  name: "Piyush",
  fun : () => {
    name: "Akash";
    console.log(`Name is ${this.name}`);
  },
};

obj1.fun();

