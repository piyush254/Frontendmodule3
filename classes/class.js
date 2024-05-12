class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  enncryptPassword() {
    return `${this.password} is your passworrd`;
  }

  changeUserName() {
    return `${this.userName.toUpperCase()}`;
  }
}
const Coffee = new User("Coffee", "Coffee@stbucks.com", "123");

console.log(Coffee.enncryptPassword());
console.log(Coffee.changeUserName());

// Behind the scene

function myUser(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

myUser.prototype.enncryptPassword = function (password) {
  return `${this.password} is your passworrd`;
};
myUser.prototype.changeUsername = function (userName) {
  return `${this.userName.toUpperCase()}`;
};

const customer = new myUser("Customer", "Customer@gmail.com", "123");

console.log(customer.enncryptPassword());
console.log(customer.changeUsername());
