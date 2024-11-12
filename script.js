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

Book.prototype.toggleReadStatus = function(){
    this.alreadyRead = !this.alreadyRead;
}
function toggleReadStatus(index){
    myLibrary[index].toggleReadStatus();
    renderBooks();

}

function renderBooks(){
    const displayArea = document.getElementById("displayArea")
    displayArea.innerHTML="";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.innerHTML = `
        <h3 class="title">title: ${book.title}</h3>
        <h4 class="author">author: ${book.author}</h4>
        <div class="pages">pages: ${book.pages}</div>
        <p></p>
        <div class="read" >${book.alreadyRead ? "Read" : "Not Read Yet" }</div>
        <button class="toggleReadStatus" onclick="toggleReadStatus(${i})">Change Status</button>
        <p></p>
        <button class="removeBookBtn" onclick="removeBookCard(${i})">Delete Book</button>
       
        `;
        bookCard.classList.add('bookCard');

    displayArea.appendChild(bookCard);
    }

}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let alreadyRead = document.getElementById("alreadyRead").value;
    let newBook = new Book(title, author, pages, alreadyRead);

    myLibrary.push(newBook);
    
    renderBooks();

    console.log(myLibrary);
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

function removeBookCard(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

