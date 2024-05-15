let person1 = {
  name: "Piyush",
  age: 25,
};

let person2 = {
  name: "John",
  age: "30",
};

function printAgeAndName(age) {
  console.log(`${this.name} age is ${age}`);
}

// printAgeAndName.apply(person2,[25]);

Function.prototype.myApply = function (obj = {}, ...args) {
  if (typeof this != 'function') {
    throw new Error("This is not a callback function");
  }
  if (!Array.isArray(...args)) {
    throw new Error("This is not in the format of an array");
  }

  obj.fn = this;
  obj.fn(...args);
};


printAgeAndName.myApply(person2, [25]);

printAgeAndName.bind(person2,person1)

