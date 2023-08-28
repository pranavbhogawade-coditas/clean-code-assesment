class Book {
    constructor(
        public title: string,
        public author: string,
        public publicationYear: number
    ) {}

    getDetails(): string {
        return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`;
    }

    updateDetails(title?: string, author?: string, publicationYear?: number): void {
        if (title) {
            this.title = title;
        }
        if (author) {
            this.author = author;
        }
        if (publicationYear) {
            this.publicationYear = publicationYear;
        }
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    searchByTitle(title: string): Book[] {
        return this.books.filter(book => book.title === title);
    }

    searchByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }

    totalBooks(): number {
        return this.books.length;
    }
}

// Example usage
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

const library = new Library();
library.addBook(book1);
library.addBook(book2);

console.log("Total books in the library:", library.totalBooks());
console.log("Books by J.D. Salinger:", library.searchByAuthor("J.D. Salinger"));
