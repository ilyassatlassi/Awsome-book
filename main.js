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