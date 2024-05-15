let user = {
  name: "Piyush",
  age: "22",
  printDetails(age) {
    console.log(
      `name : ${this.name}\nage : ${this.age} \nyour passing value of age is ${age}`
    );
  },
};
// user.printDetails(32);

let user2 = {
  name: "Rahul",
  age: "22",
};

// Functioon borrowing

// user.printDetails.call(user2, 25);

let user3 = {
  name: "Pushkar",
  age: "22",
};

printDetails = function (age, country, city) {
  console.log(
    `name : ${this.name}\nage : ${this.age} \nyour passing value of age is ${age}\nYour City is ${city} \nYour Counter is ${country}`
  );
};

let user4 = {
  name: "Pusparaj",
  age: "22",
};

printDetails.call(user4, 50, "Delhi", "India");

printDetails.apply(user3, ["50", "India", "Chennai"]);

let newFun = printDetails.bind(user2, 50, "Delhi", "India");

newFun();
