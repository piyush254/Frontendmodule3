class Bank {
  constructor(name, bank, balance) {
    this.name = name;
    this.bank = bank;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

class SavingAccount extends Bank {
  constructor(name, bank, balance, type) {
    super(name, bank, balance);
    this.type = type;
  }
  loan() {
    console.log(`This is a loan function`);
  }
}

const user1 = new SavingAccount("Piyush", "Axix", 1000, "student");

console.log(user1);
