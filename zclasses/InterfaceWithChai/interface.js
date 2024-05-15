class user {
  constructor(userName) {
    this.userName = userName;
  }
  Logme() {
    console.log(`Username is ${this.userName}`);
  }
}

class Teacher extends user {
  constructor(userName, email, password) {
    super(userName)
    this.email = email;
    this.password = password;
  }
  addCourses(){
    console.log(`A new Course was added by ${this.userName}`);
  }
}


const chai = new Teacher("Chai","Chai@Teacher.com",'123');
const Tea = new user('Tea');

chai.addCourses();
chai.Logme();
Tea.Logme();
Tea.addCourses()