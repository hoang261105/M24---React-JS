"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let myCar = new Vehicle("Mercedes", 1990, "Mec");
let myCar1 = new Vehicle("Toyota", 2000, "Innova");
console.log("Thông tin xe 1:");
console.log("Tên: ", myCar.name);
console.log("Năm: ", myCar.year);
console.log("Công ty: ", myCar.company);
console.log("Thông tin xe 2:");
console.log("Tên: ", myCar1.name);
console.log("Năm: ", myCar1.year);
console.log("Công ty: ", myCar1.company);
