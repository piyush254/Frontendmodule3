
Function.prototype.bind = function (object, ...resParam) {
  // This keyword have access of f1
  const f1 = this;
  return function f2() {
    f1.apply(object, resParam);
  };
};

function fn(city, age) {
  console.log("Name : " + this.name + "\nCity : " + city +"\nAge : "+ age);
}

const user = {
  name: "Ankit",
};

const fn2 = fn.bind(user, "Kota", 16 );

fn2();
