"use strict";
// Sự khác nhau giữa protected và private
// 1. protected: protected: Khi một thành viên được khai báo là protected, nó có thể được truy cập từ bên trong lớp đó cũng như từ bên trong các lớp con kế thừa từ lớp đó.
// 2. private: private: Khi một thành viên được khai báo là private, nó chỉ có thể được truy cập từ bên trong lớp đó. Không có lớp con nào cũng không thể truy cập vào thành viên private.
class Vehicles {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    startEngine() {
        console.log("Engine started");
    }
    stopEngine() {
        console.log("Engine stopped");
    }
    getInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
    }
    start() {
        this.startEngine();
    }
    stop() {
        this.stopEngine();
    }
}
class Car extends Vehicles {
    accelerate() {
        this.startEngine();
        console.log("Car is accelerating");
    }
    decelerate() {
        this.stopEngine();
        console.log("Car is decelerating");
    }
}
const vehicle = new Vehicles("Vehicle", 1);
vehicle.getInfo();
vehicle.start();
vehicle.stop();
const car = new Car("Car", 2);
car.getInfo();
car.accelerate();
car.decelerate();
