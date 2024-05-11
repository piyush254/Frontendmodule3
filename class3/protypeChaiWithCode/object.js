function multiply(a){
  return a*5;
}

multiply.pow = 2;


console.log(multiply(5));
console.log(multiply.pow);
console.log(multiply.prototype);


function createUser(user,price){
  this.user = user;
  this.price = price
}

createUser.prototype.increment = function(){
  console.log(`this is increment value ${this.price+1}`);
}

createUser.prototype.printMe = function(){
  console.log(`this user value ${this.user}`);
}

const chai = new createUser("Chai",25);
const coffee = new createUser("Coffee",250);

chai.increment()
coffee.increment();

chai.printMe();
coffee.printMe();