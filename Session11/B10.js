"use strict";
class Shape {
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculatePerimeter() {
        return Math.PI * 2 * this.radius;
    }
}
const rectangles = new Rectangle(10, 20);
const circles = new Circle(4);
console.log(rectangles.calculatePerimeter());
console.log(circles.calculatePerimeter());
