const List = document.getElementById('List');
const AddNew = document.getElementById('AddNew');
const Contact = document.getElementById('Contact');
const dayDate = document.getElementById('dateTime')

const listBookSection = document.getElementById('box');
const addNewBook = document.getElementById('form');
const contactMe = document.getElementById('contact-section');

List.addEventListener('click', () => {
  listBookSection.classList.remove('hidden');
  addNewBook.classList.add('hidden');
  contactMe.classList.add('hidden');
});
AddNew.addEventListener('click', () => {
  listBookSection.classList.add('hidden');
  addNewBook.classList.remove('hidden');
  contactMe.classList.add('hidden');
});
Contact.addEventListener('click', () => {
  listBookSection.classList.add('hidden');
  addNewBook.classList.add('hidden');
  contactMe.classList.remove('hidden');
});

const date = window.luxon;
const today = date.DateTime.local();

const {
  year, day, month, hour, minute, second,
} = today;

const dateNow = `${day}/${month}/${year}  ${hour}:${minute}:${second}`;

dayDate.innerHTML = dateNow;