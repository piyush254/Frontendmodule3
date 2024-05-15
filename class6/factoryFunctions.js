let store = {
  withdraw(amount) {
    this.balance -= amount;
  },
};

function createUser(name, bank, balance) {
  let user = Object.create(store);
  user.name = name;
  user.bank = bank;
  user.balance = balance;
  return user;
}


const user1 = createUser("piyush", "ICICI" , 10000);
console.log(user1);
user1.withdraw(500);

console.log(user1);