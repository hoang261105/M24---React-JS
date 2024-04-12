class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getDescription(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;
    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    getDescription(): void {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

const product = new Product("Quả cam", 10000);
product.getDescription();

const electronic = new Electronics("Quả bí", 20000, "Việt Nam");
electronic.getDescription();