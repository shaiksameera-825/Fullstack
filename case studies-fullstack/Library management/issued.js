function displayIssuedBooks() {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  let issuedList = document.getElementById("issuedList");
  let noBooks = document.getElementById("noBooks");

  let issuedBooks = books.filter(book => book.status === "Issued");

  issuedList.innerHTML = "";

  if (issuedBooks.length === 0) {
    noBooks.textContent = "No books issued";
    return;
  }

  noBooks.textContent = "";

  issuedBooks.forEach(book => {
    issuedList.innerHTML += `
      <div>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button onclick="returnBook(${book.id})">Return</button>
      </div>
      <hr>
    `;
  });
}

function returnBook(id) {
  let books = JSON.parse(localStorage.getItem("books"));

  books = books.map(book => {
    if (book.id === id) {
      book.status = "Available";
    }
    return book;
  });

  localStorage.setItem("books", JSON.stringify(books));
  displayIssuedBooks();
}

displayIssuedBooks();
