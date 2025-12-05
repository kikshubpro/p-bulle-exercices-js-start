//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  Balance = null;
  constructor() {}

  open() {
    if (this.Balance === null) {
      this.Balance = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.Balance !== null) {
      this.Balance = null;
    } else {
      throw new ValueError();
    }
  }

  deposit(deposit) {
    if (deposit >= 0 && this.Balance !== null) {
      this.Balance += deposit;
    } else {
      throw new ValueError();
    }
  }

  withdraw(withdraw) {
    if (withdraw >= 0 && this.Balance >= withdraw) {
      this.Balance -= withdraw;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.Balance !== null) {
      return this.Balance;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
