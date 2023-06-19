import {listBooks} from '../js/data/data-books.js';
import {Book} from '../js/classes/Book.js';
import {Library} from '../js/classes/Library.js';

window.addEventListener("DOMContentLoaded", function() {
    dynamicList();
});

function dynamicList() {
    let section = document.getElementById("list-of-books");
    
    let library = new Library();
    library.load(listBooks);
    
    for (let i=0; i<5; i++)
    {
        let article = document.createElement("article");
        let cover = document.createElement("img");
        cover.setAttribute("src", library.shelf[i].image);
        // cover.src = library.shelf[i].image;
        
        let title = document.createElement("h4");
        title.textContent = library.shelf[i].title;
        
        let catagory = document.createElement("p");
        catagory.classList.add("category");
        catagory.textContent = library.shelf[i].category;
        
        let author = document.createElement("p");
        author.textContent = library.shelf[i].author;
        
        let btn = document.createElement("button");
        btn.innerHTML = "Découvrir le livre";
        
        article.appendChild(cover);
        article.appendChild(title);
        article.appendChild(catagory);
        article.appendChild(author);
        article.appendChild(btn);
        
        section.appendChild(article);
    }
    console.log(library.shelf);
}