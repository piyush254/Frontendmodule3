/*
function sum(a, b, c, ...respara) {
  console.log(respara);
  return a + b + c;
}

let arr = [5, 6, 7, 8, 9];
arr = [...arr , 10];
console.log(arr);


console.log(sum(...arr));

console.log(sum(arr[0], arr [1] , arr[2] , arr[3]));
*/

/*
const array = [3, 1, 5, 2, 40];
const sortedArray = array.slice().sort((a , b) => a- b);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5]
console.log(array); // Output: [3, 1, 5, 2, 4] (original array remains unchanged)
*/
/*
let user = {
  name: "Piyush",
  age: "24",
  designation: "Teacher",
};


const {...res } = user ;

console.log(res);

user = {
  ...user ,
  age : 25 ,
}


const {age} = user ;

console.log(age);

*/
/*

const names = ["Piyush" , "Ajay" , "Anuj" , "vijay"];


function getName(name1 , name2 , name3 , name4) {
  console.log(name1 , name2 , name3, name4);
}

getName(names[0], names[1] , names[2]);
getName(...names);
// getName(names)

*/

//  reducer function working with spread and reducer function
/*
let arr = [1, 2, 3];

let arr2 = [4, 5, 6];

arr = [...arr, ...arr2];

// console.log(arr);

function multiply(...respara) {
  return respara.reduce((accu, current) => {
    return accu * current;
  }, 1);
}

function sum(...respara) {
  return respara.reduce((accu, current) => {
    return accu + current;
  }, 0);
}

console.log(multiply(...arr));
console.log(sum(...arr));



let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
 let a =[1, 100].reduce(getMax, 50); // 100
 console.log(a);
let b = [50].reduce(getMax, 10); // 50
console.log(b);
// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
 let c = [].reduce(getMax, 1); // 1
console.log(c);

// we cannot use reduce over empty array with no initial value
[].reduce(getMax); // TypeError


*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(arr);