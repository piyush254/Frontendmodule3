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