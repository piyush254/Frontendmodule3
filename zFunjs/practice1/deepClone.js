let obj = {
  a: 10,
  b: {
    c: 100,
  },
};

let obj1Str = JSON.stringify(obj);

console.log(obj1Str);
const obj2 = JSON.parse(obj1Str);

obj2.b.c = 70;

console.log("obj --> ", obj);
console.log("obj2 --> ", obj2);

// console.log(typeof obj.a)

function deepClone(obj) {
  // base Condition

  let result = {};
  for (key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}
