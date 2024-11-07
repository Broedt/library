const myLibrary = [];

function Book(title, author, pages, alreadyRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.alreadyRead = alreadyRead;
}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let alreadyRead = document.getElementById("alreadyRead").value;
    let newBook = new Book(title, author, pages, alreadyRead);

    console.log(newBook);
}

let newBookBtn = document.getElementById("newBookBtn")
newBookBtn.addEventListener("click", function(){
    
    let newBookForm = document.getElementById("newBookForm")
    newBookForm.style.display = "grid";
})

document.getElementById("newBookForm").addEventListener("submit", function(){
    event.defaultPrevented;
    
    addBookToLibrary();
})

console.log(myLibrary)