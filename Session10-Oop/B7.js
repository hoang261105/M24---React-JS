"use strict";
class Cirle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circles = new Cirle(5);
console.log(`Bán kính là: ${circles.getRadius()}`);
console.log(`Chu vi: ${circles.getPerimeter()}`);
console.log(`Diện tích: ${circles.getArea()}`);
circles.setRadius(15);
console.log(`Bán kính mới là: ${circles.getRadius()}`);
console.log(`Chu vi mới: ${circles.getPerimeter()}`);
console.log(`Diện tích mới: ${circles.getArea()}`);
