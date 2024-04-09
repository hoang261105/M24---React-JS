class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    printBook(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }

    updateBook(title: string, author: string, price: number): void {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

const book = new Book("Làng", "Kim Lân", 120000);
book.printBook();

book.updateBook("Truyện Kiều", "Nguyễn Du", 150000);
book.printBook();