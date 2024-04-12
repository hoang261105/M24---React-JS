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

    public withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Không hợp lệ");
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

class CheckingAccount extends Account {
    private overdraftLimit: string;
    constructor(accountNumber: string, balance: number, overdraftLimit: string) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
        } else {
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