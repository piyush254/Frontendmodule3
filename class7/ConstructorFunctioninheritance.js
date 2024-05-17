function Bank(name, bank, balance) {
  this.name = name;
  this.bank = bank;
  this.balance = balance;
}


Bank.prototype.deposit = function(amount){
  this.balance += amount;
}

function Saving (name , bank , balance , type){
    Bank.call(this,name , bank , balance);
    this.type = type ;
}

Saving.prototype.loan = function(){
  console.log(`Granted loan is ${this.balance / 10}`);
}


Object.setPrototypeOf(Saving.prototype , Bank.prototype)