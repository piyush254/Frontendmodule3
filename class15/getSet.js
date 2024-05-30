class Bank {
  #Balance;
  constructor(name, Bank, Balance, type) {
    this.name = name;
    this.Bank = Bank;
    this.#Balance = Balance;
    this.type = type;
  }
  get Balance() {
    return this.#Balance;
  }
  set Balance(val) {
    console.log("Balance Updated");
    this.#Balance = val;
  }
  set Deposite(val) {
    this.#Balance += val;
    console.log(val, "Balance Added", "\nNew balance is", this.#Balance);
  }
  set Address(val) {
    this.NewAddress = val;
  }
  get Address() {
    return this.NewAddress;
  }
}

const user1 = new Bank("Piyush", "ICICI", 10000, "Saving");

console.log(user1.Balance);

user1.Balance = 20000;

console.log(user1.Balance);

user1.Deposite = 30000;
user1.Address = "Delhi";

console.log(user1.Address);