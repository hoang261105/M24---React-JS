class Account {
    protected accountNumber: string;
    protected balance: number;
    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Số dư tài khoản không đủ để rút");
        } else {
            this.balance -= amount;
        }
    }
}

class SavingAccount extends Account {
    private insertRate: number;
    constructor(accountNumber: string, balance: number, insertRate: number) {
        super(accountNumber, balance);
        this.insertRate = insertRate;
    }

    calculateInterest(): number {
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