let books = [
  { id: 1, title: "Harry Potter", author: "J K Rowling", status: "Available" },
  { id: 2, title: "Atomic Habits", author: "James Clear", status: "Available" },
  { id: 3, title: "Wings of Fire", author: "A P J Abdul Kalam", status: "Available" }
];

localStorage.setItem("books", JSON.stringify(books));

function displayBooks(list) {
  let bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  list.forEach(book => {
    bookList.innerHTML += `
      <div>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>Status: ${book.status}</p>
        <button onclick="issueBook(${book.id})" ${book.status === "Issued" ? "disabled" : ""}>
          Issue Book
        </button>
      </div>
      <hr>
    `;
  });
}

function issueBook(id) {
  let books = JSON.parse(localStorage.getItem("books"));

  books = books.map(book => {
    if (book.id === id) {
      book.status = "Issued";
    }
    return book;
  });

  localStorage.setItem("books", JSON.stringify(books));
  displayBooks(books);
}

function searchBooks() {
  let search = document.getElementById("search").value.toLowerCase();
  let books = JSON.parse(localStorage.getItem("books"));

  let filtered = books.filter(book =>
    book.title.toLowerCase().includes(search) ||
    book.author.toLowerCase().includes(search)
  );

  displayBooks(filtered);
}

displayBooks(books);
