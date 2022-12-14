import Books from './booksClass.js';

let currendID = 0;

export default class ListBooks {
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
