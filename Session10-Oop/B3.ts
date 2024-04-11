class Employee {
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log("Name: ", this.name);
        console.log("Company: ", this.company);
        console.log("Phone: ", this.phone);
    }
}

let result = new Employee("Hoàng", "Sông Đà", 0903599038);
result.printInfo();

