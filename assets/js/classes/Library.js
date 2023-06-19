import {listBooks} from '../data/data-books.js';
import {Book} from './Book.js';

class Library {
    #shelf;
    
    constructor(shelf) {
        this.#shelf = [];
    }
    
    get shelf() {
        return this.#shelf;
    }
    set shelf(shelf) {
        this.#shelf = shelf;
    }
    
    load(bookList) {
        let newList;
        for (let i=0; i<listBooks.length; i++)
        {
            newList = new Book(
                listBooks[i].title, 
                listBooks[i].category, 
                listBooks[i].author, 
                listBooks[i].resume, 
                listBooks[i].image);
        }
        this.#shelf.push(newList);
    }
    
    addBook(book) {
        this.#shelf.push(book);
    }
    
    removeBook(book) {
        for (let i=0; i<this.#shelf.length; i++)
        {
            if (this.#shelf[i].title === book.title && this.#shelf[i].author === book.author)
            {
                this.#shelf.splice(this.#shelf[i], 1);
            }
        }
    }
    
    findBookByTitle(title) {
        for (let i=0; i<this.#shelf.length; i++)
        {
            if (this.#shelf[i].title === title)
            {
                return this.#shelf[i];
            }
        }
    }
    
    findBookByAuthor(author) {
        for (let i=0; i<this.#shelf.length; i++)
        {
            if (this.#shelf[i].author === author)
            {
                return this.#shelf[i];
            }
        }
    }
    
    findBookByCategory(category) {
        for (let i=0; i<this.#shelf.length; i++)
        {
            if (this.#shelf[i].category === category)
            {
                return this.#shelf[i];
            }
        }
    }
}

export {Library};