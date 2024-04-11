class BookLists {
    private title: string;
    private author: string;
    private quantity: number;
    constructor(title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getQuanity(): number {
        return this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }
}

class Librarys {
    private books: BookLists[];
    constructor() {
        this.books = [];
    }

    addBook(books: BookLists): void {
        const existBook = this.books.find(
            (b) => b.getTitle() === books.getTitle() && b.getAuthor() === books.getAuthor()
        );
        if (existBook) {
            existBook.increaseQuantity();
        } else {
            this.books.push(books);
        }
    }

    viewBooks(): void {
        for (const books of this.books) {
            console.log(`Title: ${books[`title`]}`, `Author: ${books["author"]}`, `Quantity: ${books[`quantity`]}`);
        }
    }
}

const book6 = new BookLists("Truyện Kiều", "Nguyễn Du");
const book7 = new BookLists("Làng", "Kim Lân");
const book8 = new BookLists("Chiếc thuyền ngoài xa", "Huy Cận");
const book9 = new BookLists("Tây Tiến", "Quang Dũng");
const book10 = new BookLists("Việt Bắc", "Tố Hữu");

const librarys = new Librarys();

librarys.addBook(book6);
librarys.addBook(book7);
librarys.addBook(book8);
librarys.addBook(book9);
librarys.addBook(book10);

const existBook = new BookLists("Truyện Kiều", "Nguyễn Du");
librarys.addBook(existBook);
librarys.viewBooks();