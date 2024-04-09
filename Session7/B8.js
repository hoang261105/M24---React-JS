"use strict";
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    printBook() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
    updateBook(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
const book = new Book("Làng", "Kim Lân", 120000);
book.printBook();
book.updateBook("Truyện Kiều", "Nguyễn Du", 150000);
book.printBook();
