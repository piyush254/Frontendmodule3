class User {
  constructor(userName) {
    this.userName = userName;
  }
  LogMe() {
    console.log(`UserName is ${this.userName}`);
  }
  static createID() {
    return `123`;
  }
}

const Akash = new User("Akash");
// console.log(Akash.createID());

class Teacher extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}


const user2 = new Teacher("user2","User2@gmail.com");

user2.LogMe();
console.log(user2.createID());