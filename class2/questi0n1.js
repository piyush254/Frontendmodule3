/*
 let user = {
  name : 'Piyush',
  age : '24',
  childObj : {
    newname : 'js is love',
    getdetails(){
      console.log(this.newname , "and ", this.name)
    }
  }
}

user.childObj.getdetails();

let myUser = {
  name : 'Piyush',
  age : '24',
  getdetails(){
    console.log(this.name);
  }
}

myUser.getdetails();  
*/

/*

let user = {
  firstName : "Piyush",
  getName (){
    firstName : "PK";
    return this.firstName;
  }
}

// console.log(user.getName());


let myUser = {
  name : 'John',
  ref(){
    return this;
  }
}
*/

// console.log(myUser.ref().ref().ref().name);

function cal(a) {
  return {
    intialValue: a,
    add(b) {
      this.intialValue += b;
      return this;
    },
    sub(b) {
      this.intialValue -= b;
      return this;
    },
    mult(b) {
      this.intialValue *= b;
      return this;
    },
  };
}

console.log(cal(10).mult(10).intialValue);
