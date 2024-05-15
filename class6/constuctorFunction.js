function UserCreator(name, bank, balance) {
  this.name = name;
  this.balance = balance;
  this.bank = bank;
}
UserCreator.prototype.withdrawAmount = function (amount){
    this.balance -= amount ;
}


const user1 = new UserCreator("Piyush" , "ICICI" , 10000);

console.log(user1.balance);
user1.withdrawAmount(500);
console.log(user1.balance);