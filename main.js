let booksList = [];

// const form = document.querySelector('#form');
const bookContainer = document.querySelector('.box');

class Books {
    constructor(title, author = null, id) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }