"use strict";
class Shape {
    calculateArea() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
const rectangle = new Rectangle(10, 20);
const circle = new Circle(4);
console.log(rectangle.calculateArea());
console.log(circle.calculateArea());
