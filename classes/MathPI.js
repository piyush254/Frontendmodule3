let descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

Math.PI = 5;

const chai = {
  name: "Ginger chai",
  price: 300,
  isAvailable: true,

  orderChai: () => {
    console.log("Chai nii bn paye");
  },
};

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable : true,
  // configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
}
