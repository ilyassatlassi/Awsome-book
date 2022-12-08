let booksList = [];

const form = document.querySelector('.form');
const bookContainer = document.querySelector('.box');
// get the item from the local storage
const getBook = () => {
  let books;
  if (localStorage.getItem('Data') != null) {
    books = JSON.parse(localStorage.getItem('Data'));
  } else {
    books = booksList;
  }
  return books;
};
// set items on local strage
const setBook = (book) => {
  const books = getBook();
  books.push(book);
  booksList = books;
  localStorage.setItem('Data', JSON.stringify(books));
};

// remove item from local storage
const removeBook = (element) => {
  const books = getBook();
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
  const item = document.createElement('li');

  item.innerHTML = `
          <p>${book.title} by ${book.author}</p>
          <button class="remove">Remove</button>
          `;

  bookContainer.appendChild(item);
};

const removeBookInViewport = (element) => {
  if (element.classList.contains('remove')) {
    element.parentElement.remove();
    removeBook(element)
  }
};

const displayBooks = () => {
  const books = getBook();
  books.forEach((book) => addBookToViewport(book));
};

document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title !== '' && author !== '') {
    const book = { title: `${title}`, author: `${author}` };
    addBookToViewport(book);
    setBook(book);
    form.reset();
  }
});

bookContainer.addEventListener('click', (e) => {
  removeBook(e.target);
  removeBookInViewport(e.target);
});