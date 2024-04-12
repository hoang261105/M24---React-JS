class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Id: ${this.id}`);
    }
}

const pers1 = new Person("Hoàng");
pers1.displayInfo();

const std1 = new Student("Linh", 1234);
std1.displayInfo();

function mul(a: number, b: number): string {
    return a * b;
}
console.log(mul(2, 2));