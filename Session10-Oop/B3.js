"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Name: ", this.name);
        console.log("Company: ", this.company);
        console.log("Phone: ", this.phone);
    }
}
let result = new Employee("Hoàng", "Sông Đà", 903599038);
result.printInfo();
