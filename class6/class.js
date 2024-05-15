function createUser(name, bank, balance) {
  const user = {};
  user.name = name;
  user.bank = bank;
  user.balance = balance;

  user.withdraw = function (amount) {
    this.balance = this.balance - amount;
  };
}

const user1 = createUser("kapil", "sbi", "10000");
const user2 = createUser("kajal", "ICICI", "50000");


