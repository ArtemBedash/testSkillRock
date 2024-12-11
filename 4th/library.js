class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

}

class Library {
    constructor() {
        this.library = [];//создаем пустой массив библиотеки

    }

    addBook(book) {
        this.library.push(book);//пушим новую книгу
    }

    borrowBook(isbn) {
        let book = this.library.find(book => book.isbn === isbn);//ищем книгу совпадающую по ISBN
        if (book) {
            if (book.isAvailable) {//если книга в наличии
                book.isAvailable = false;//меняем доступность
                return `The Book ${book.title} : ${book.author} is available.You borrowed it`
            } else {
                return `The Book is borrowed :${book.title} : ${book.author}`
            }
        } else {
            return `OOPS! There is no book with ISBN: ${isbn} in our library `
        }
    }

    returnBook(isbn) {
        let book = this.library.find(book => book.isbn === isbn);
        if (book) {
            book.isAvailable = true;//меняем доступность после возврата
            return `Great! You returned ${book.title} in our library. Glad to see you again`//выводим успешное уведмоление
        } else {
            return `Oh.It looks like you messed up the library. We've never had this book`
        }
    }

    listAvailableBooks() {
        let books = this.library;
        books.forEach((book) => {
            console.log(`${book.title} by ${book.author} ISBN: ${book.isbn}`);
        })
    }
}

const library = new Library();
const Books = [

    new Book("It", "Stephen King", 9781501142970),
    new Book("Carrie", "Stephen King", 9780307743664),
    new Book("The Black Swan", "Nassim Nicholas Taleb", 9780812973815),
    new Book("Fooled by Randomness", "Nassim Nicholas Taleb", 9781400067930),
]

for (let i = 0; i < Books.length; i++) {
    library.addBook(Books[i]);
}

console.log(library.returnBook(323232));
console.log(library.listAvailableBooks());
console.log(library.borrowBook(9780307743664));
console.log(library.borrowBook(9780307743664));
console.log(library.returnBook(9780307743664));


