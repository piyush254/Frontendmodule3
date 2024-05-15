let person1 = {
  name: "Piyush",
  age: 25,
};

let person2 = {
  name: "John",
  age: "30",
};

function printAgeAndName(age) {
  console.log(`${this.name} age is ${this.age}`);
}

// printAgeAndName.call(person2, 25);

Function.prototype.myCall = function (obj = {}, ...args) {
  // console.log(this);

  if (typeof this != "function") {
    throw new Error("Not a call Function");
  }

  // console.log(obj);
  // console.log(args);
  obj.fn = this ;
  // console.log(obj);
  obj.fn(...args)
};



printAgeAndName.myCall(person1, 25, 26, 27, 28);

