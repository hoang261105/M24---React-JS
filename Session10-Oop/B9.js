"use strict";
class BookList {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(books) {
        this.books.push(books);
    }
    viewBooks() {
        for (const books of this.books) {
            console.log(`Title: ${books[`title`]}`, `Author: ${books["author"]}`);
        }
    }
}
const book1 = new BookList("Truyện Kiều", "Nguyễn Du");
const book2 = new BookList("Làng", "Kim Lân");
const book3 = new BookList("Chiếc thuyền ngoài xa", "Huy Cận");
const book4 = new BookList("Tây Tiến", "Quang Dũng");
const book5 = new BookList("Việt Bắc", "Tố Hữu");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
