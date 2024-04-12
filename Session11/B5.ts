// Sự khác nhau giữa protected và private
// 1. protected: protected: Khi một thành viên được khai báo là protected, nó có thể được truy cập từ bên trong lớp đó cũng như từ bên trong các lớp con kế thừa từ lớp đó.
// 2. private: private: Khi một thành viên được khai báo là private, nó chỉ có thể được truy cập từ bên trong lớp đó. Không có lớp con nào cũng không thể truy cập vào thành viên private.

class Vehicles {
    protected name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    protected startEngine(): void {
        console.log("Engine started");
    }

    private stopEngine(): void {
        console.log("Engine stopped");
    }

    public getInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
    }

    public start(): void {
        this.startEngine();
    }

    public stop(): void {
        this.stopEngine();
    }
}

class Car extends Vehicles {
    public accelerate(): void {
        this.startEngine();
        console.log("Car is accelerating");
    }

    public decelerate(): void {
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