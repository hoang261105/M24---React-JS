"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Id: ${this.id}`);
    }
}
const pers1 = new Person("Hoàng");
pers1.displayInfo();
const std1 = new Student("Linh", 1234);
std1.displayInfo();
function mul(a, b) {
    return a * b;
}
console.log(mul(2, 2));
