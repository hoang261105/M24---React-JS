class Shape {
    calculatePerimeter(): number {
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

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius;
    }

    calculatePerimeter(): number {
        return Math.PI * 2 * this.radius;
    }
}

const rectangles = new Rectangle(10, 20);
const circles = new Circle(4);

console.log(rectangles.calculatePerimeter());
console.log(circles.calculatePerimeter());

