const obj = {
  name: "Mahi",
  place: "csk",
};

const proto1 = {
  greet: function () {
    // return `${this.name} bhai ${this.place}  se hai`;
    return this;
  },
  greet1: function () {
    return "Hello World";
  },
};

// obj.__proto__ = proto1;
Object.setPrototypeOf(obj ,proto1);
console.log(obj.greet());

function Person(name) {
  this.name = name;
}
Person.prototype.Uppaercase = function () {
  return this.name.toUpperCase();
};
Person.prototype.greet = function () {
  return "Hello " + this.name;
};

const alice = new Person("Alice");
console.log(alice.greet());
console.log(alice.Uppaercase());
