"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    getHeight() {
        return this.height;
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(10, 20);
console.log(`Chiều dài: ${rectangle.getWidth()}`);
console.log(`Chieu rộng:  ${rectangle.getHeight()}`);
console.log(`Chu vi: ${rectangle.getPerimeter()}`);
console.log(`Diện tích: ${rectangle.getArea()}`);
rectangle.setWidth(20);
rectangle.setHeight(15);
console.log(`Chiều dài mới: ${rectangle.getWidth()}`);
console.log(`Chieu rộng mới:  ${rectangle.getHeight()}`);
console.log(`Chu vi mới: ${rectangle.getPerimeter()}`);
console.log(`Diện tích mới: ${rectangle.getArea()}`);
