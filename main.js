let currendID = 0;
/* eslint-disable max-classes-per-file */
class Books {
  constructor(title, author = null, id) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}
// create a class for a book
class ListBooks {
  constructor() {
    this.bookcollection = [];
  }

  add = (title, author) => {
    const list = new Books(title, author, currendID);
    this.bookcollection.push(list);
  }

      delete =(id) => {
        document.getElementById(id).remove();
        this.bookcollection = this.bookcollection.filter((book) => book.id !== id);
      }

      addto = (title, author) => {
        const itemId = currendID;
        const listBooks = document.querySelector('.box');
        const li = document.createElement('li');
        li.id = currendID;
        const pTitleAuthor = document.createElement('p');
        pTitleAuthor.textContent = `"${title}" by ${author}`;
        const btnRemove = document.createElement('button');
        btnRemove.textContent = 'Remove';
        btnRemove.setAttribute('id', 'Remove');
        btnRemove.addEventListener('click', () => {
          this.delete(itemId);
        });

        li.append(pTitleAuthor, btnRemove);
        listBooks.append(li);
        currendID += 1;
      }
}

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
