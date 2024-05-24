// console.log(this);
// This coade have a mistake
// the mistake is f1.call(object , respara)
Function.prototype.bind = function (object, ...respara) {
  // This keyword have access of f1
  const f1 = this;
  return function f2() {
    f1.call(object);
  };
};

function fn(city) {
  console.log("Name : " + this.name + "\nCity : " + city);
}

const user = {
  name: "Ankit",
};

const fn2 = fn.bind(user, "Kota");

fn2();

