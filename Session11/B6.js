"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
const product = new Product("Quả cam", 10000);
product.getDescription();
const electronic = new Electronics("Quả bí", 20000, "Việt Nam");
electronic.getDescription();
