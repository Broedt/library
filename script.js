const myLibrary = [];
let newBookBtn = document.getElementById("newBookBtn");
let addBook = document.getElementById("addBook");
let allInputs = document.querySelectorAll("#newBookForm input");

function Book(title, author, pages, alreadyRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.alreadyRead = alreadyRead;
};

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let alreadyRead = document.getElementById("alreadyRead").value;
    let newBook = new Book(title, author, pages, alreadyRead);

    myLibrary.push(newBook);

    function displayNewBook(){
        const displayArea = document.getElementById("displayArea")

        myLibrary.forEach()

}

    console.log(newBook);
};

newBookBtn.addEventListener("click", function(){
    
    let newBookForm = document.getElementById("newBookForm")
    newBookForm.style.display = "grid";
    addBook.style.display ="grid";
});

addBook.addEventListener("click", function(){    
    addBookToLibrary();
    allInputs.forEach(input =>{
        input.value = "";           //clears input 
    
    let checkbox = document.getElementById("newBookForm").querySelector("input[type='checkbox']");
    checkbox.checked = false;
    })
});

