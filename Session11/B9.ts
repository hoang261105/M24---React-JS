class Shape {
    calculateArea(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const rectangle = new Rectangle(10, 20);
const circle = new Circle(4);

console.log(rectangle.calculateArea());
console.log(circle.calculateArea());