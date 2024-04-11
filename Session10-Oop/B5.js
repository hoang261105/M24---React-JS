"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe() {
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
    }
}
let department = new Department(1, "Hoàng", ["Huy", "Linh", "Hương"]);
department.describe();
