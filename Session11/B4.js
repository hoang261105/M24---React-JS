"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Toc độ hiện tại: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Id: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}
const vehicle1 = new Bicycle("Kawasaki H2R", 400, 1234, 3);
vehicle1.showInfo();
vehicle1.speedUp(50);
vehicle1.showSpeed();
vehicle1.slowDown(50);
vehicle1.showSpeed();
