"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    displayInfo() {
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
        console.log("Year: ", this.year);
        console.log("Company", this.company);
    }
}
let result1 = new Vehicle("Land Cruiser", 2002, "Toyota", 5);
result1.displayInfo();
