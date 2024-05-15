class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  encriptkKeyPassword() {
    return `${this._password}`
  }
  
  get password (){
    return `${this._password}`
  }
  set password(value){
    this._password = value;
  }
}

const myName = new User("Piyush", "Piyush@121@gmail.com", "123");

console.log(`${myName.name}\n${myName.email}\n${myName.password}`);

// console.log(myName.encriptkKeyPassword());
console.log(myName._password);

myName.password = "abcNewpassword";

console.log(`Your New password is  ${myName.password}`);