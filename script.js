const myLibrary = [];

let addBook = document.getElementById("addBook");
let allInputs = document.querySelectorAll("#newBookForm input");
let newBookForm = document.getElementById("newBookForm")

class Book{
    constructor(title, author, pages, alreadyRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.alreadyRead = alreadyRead;}
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
        <div class="cardBtns">
        <button class="toggleReadStatus" onclick="toggleReadStatus(${i})">Change Status</button>
        
        <button class="removeBookBtn" onclick="removeBookCard(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>
       <d/iv>
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
    
    newBookForm.style.display = "grid";
    
});

newBookForm.addEventListener("submit", function(){ 
    event.preventDefault()   
    addBookToLibrary();
    allInputs.forEach(input =>{
        input.value = "";           //clears input 
        
    
    let checkbox = document.getElementById("newBookForm").querySelector("input[type='checkbox']");
    checkbox.checked = false;
    })
    let submitBtn= document.getElementById("submitBtn");
    submitBtn.value = "add Book";
    newBookForm.style.display="none";
});

function removeBookCard(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

