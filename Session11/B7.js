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
        if (amount > this.balance) {
            console.log("Số dư tài khoản không đủ để rút");
        }
        else {
            this.balance -= amount;
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
const savingsAccount = new SavingAccount("123456789", 1000, 0.05);
const monthlyInterest = savingsAccount.calculateInterest();
console.log("Tiền lãi hàng tháng:", monthlyInterest);
savingsAccount.deposit(500);
// Tính tiền lãi hàng tháng sau khi gửi thêm tiền
const updatedMonthlyInterest = savingsAccount.calculateInterest();
console.log("Tiền lãi hàng tháng sau khi gửi thêm tiền:", updatedMonthlyInterest);
