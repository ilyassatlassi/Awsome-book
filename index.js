/* eslint-disable max-classes-per-file */
import ListBooks from './modules/listBookClass.js';

const booksList = new ListBooks();

const btnAdd = document.getElementById('buttonAdd');
const title = document.getElementById('title');
const author = document.getElementById('author');

btnAdd.addEventListener('click', (event) => {
  if (title.value.length === 0 || author.value.length === 0) {
    event.preventDefault();
  } else {
    booksList.add(title.value, author.value);
    booksList.addto(title.value, author.value);
  }
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('booksList', JSON.stringify(booksList.bookcollection));
});

if (window.localStorage.getItem('booksList') !== 'undefined') {
  const list = JSON.parse(window.localStorage.getItem('booksList'));
  list.forEach((bookcollection) => {
    booksList.addto(bookcollection.title, bookcollection.author);
  });
}
/* eslint-disable max-classes-per-file */
