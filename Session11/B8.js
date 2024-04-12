"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Không hợp lệ");
        }
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, insertRate) {
        super(accountNumber, balance);
        this.insertRate = insertRate;
    }
    calculateInterest() {
        return this.balance * this.insertRate;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
        }
        else {
            console.log("Số tiền rút vượt quá hạn mức thấu chi");
        }
    }
}
const checkingAccount = new CheckingAccount("987654321", 1000, 500);
console.log("Balance:", checkingAccount.balance);
checkingAccount.withdraw(800);
console.log("Balance:", checkingAccount.balance);
checkingAccount.withdraw(400);
console.log("Balance:", checkingAccount.balance);
