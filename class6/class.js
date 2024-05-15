class User{
  constructor(name ,  bank , balance){
    this.name = name ;
    this.bank = bank ;
    this.balance = balance ;
  }
  withdrawalAmount(amount ){
    return this.balance -= amount;
  }
}

const user1 = new User ("Piyush", "ICICI", 50000);


console.log(user1);

console.log(user1.withdrawalAmount(5000));
