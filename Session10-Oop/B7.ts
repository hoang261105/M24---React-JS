class Cirle {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(newRadius: number): void {
        this.radius = newRadius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    getArea(): number {
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