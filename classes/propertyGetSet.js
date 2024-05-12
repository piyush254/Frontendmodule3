function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return `${this._email.toUpperCase()}@gmail.com`;
   
    },
    set: function (value) {
      this.email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this.password = value;
    },
  });
}


const user1 = new User("user121", "123");
console.log(user1.email);
console.log(user1.password);