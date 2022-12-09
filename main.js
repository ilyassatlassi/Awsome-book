let booksList = [];

const form = document.getElementById('form');
const bookContainer = document.querySelector('.box');
const title = document.getElementById('title');
const author = document.getElementById('author');

// add the book to the view page
const addBook = (book) => {
  bookContainer.innerHTML += `
    <li id='${book.id}'>
     <p>${book.title}</p>
        <p>${book.author}</p>
        <button id='delete' type='button' onclick = 'removeBook(${book.id})'>Remove</button>
    </li>
  `;
};

// add the item to localstorage
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (title.value && author.value !== '') {
    const book = {
      id: Math.random(),
      title: title.value,
      author: author.value,
    };

    if (localStorage.getItem('booksList') === null) {
      booksList = [];
    } else {
      booksList = JSON.parse(localStorage.getItem('booksList'));
    }
    booksList.push(book);
    localStorage.setItem('booksList', JSON.stringify(booksList));
    addBook(book);
    form.reset();
  }
});

// remove item from localstorage
function removeBook(bookId) {
  const deleteBook = JSON.parse(localStorage.getItem('booksList'));

  const newArray = deleteBook.filter((book) => book.id !== bookId);
  localStorage.setItem('booksList', JSON.stringify(newArray));

  const booksId = document.getElementById(bookId);
  booksId.remove();
}

const storedBooks = JSON.parse(localStorage.getItem('booksList')) || [];

if (localStorage.getItem('booksList')) {
  storedBooks.map((book) => addBook(book));
}

removeBook();
