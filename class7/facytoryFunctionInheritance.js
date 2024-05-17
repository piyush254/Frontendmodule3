let store1 = {
  deposit(amount) {
    this.balance += amount;
  },
};

function BankAccount(name, bank, balance) {
  let user = Object.create(store);
  user.name = name;
  user.bank = bank;
  user.balance = balance;

  return user;
}

let store2 = {
  loan() {
    console.log(`You are eligible for ${balance / 10}`);
  },
};

// store2 object cannot access deposite function

// store2.__proto = store1

function savingAccount(name, bank, balance, type) {
  let user = BankAccount(name, bank, balance);
  Object.setPrototypeOf(user, store1);
  user.type = type;
  return user;
}
