function setUserName(userName) {
  this.userName = userName;
}

function setEmail(email) {
  this.email = email;
}

function createUser(userName, email, password) {
  setUserName.call(this, userName);
  setEmail.call(this, email);
  this.password = password;
}

const chai = new createUser("Chai", "Chai@fb.com", "123");
console.log(chai);
