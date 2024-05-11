function setUserName(userName) {
  this.userName = userName;
  console.log(`Setusernase is calling`);
}

function createUser(userName, email, password) {
  setUserName.call(this,userName);
  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai","Chai@fb.com","123");
console.log(chai);