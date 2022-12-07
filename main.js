let booksList = [];

const form = document.querySelector('#form');
const bookContainer = document.querySelector('.box');

const getBookData = () => {
  let books;
  if (localStorage.getItem('Data') != null) {
    books = JSON.parse(localStorage.getItem('Data'));
  } else {
    books = booksList;
  }
  return books;
};

const setBook = (book) => {
  const books = getBookData();
  books.push(book);
  booksList = books;
  localStorage.setItem('Data', JSON.stringify(books));
};

const removeBook = (element) => {
  const books = getBookData();
  const position = Array.prototype.indexOf.call(
    bookContainer.childNodes,
    element.parentElement,
  ) - 1;

  if (element.classList.contains('button')) {
    books.forEach((book, index) => {
      if (position === index) {
        books.splice(index, 1);
      }
      booksList = books;
      localStorage.setItem('Data', JSON.stringify(books));
    });
  }
};

const addBookToViewport = (book) => {
  const item = document.createElement("li");

  item.innerHTML = `
          <p>${book.title} by ${book.author}</p>
          <button class="button">Remove</button>
          `;

  bookContainer.appendChild(item);
};

const removeBookInViewport = (element) => {
  if (element.classList.contains("button")) {
    element.parentElement.remove();
  }
};

const displayBooks = () => {
  const books = getBookData();
  books.forEach((book) => addBookToViewport(book));
};

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;

  if (title !== "" && author !== "") {
    const book = { title: `${title}`, author: `${author}` };
    addBookToViewport(book);
    setBook(book);
    form.reset();
  }
});

bookContainer.addEventListener("click", (e) => {
  removeBook(e.target);
  removeBookInViewport(e.target);
});