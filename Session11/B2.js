"use strict";
class EmployeeList {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class ManagerList extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`TeamSize: ${this.teamSize}`);
    }
}
const employees = new Employee("Hoàng", "Rikkei", "0903599038");
employee.printInfo();
const managers = new Manager("Quý", "Rikkei", "0123456789", 6);
manager.printInfo();
