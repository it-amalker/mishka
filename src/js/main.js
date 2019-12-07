const mainMenu = document.querySelector('.main-menu');
const userMenu = document.querySelector('.user-menu');
const openMenuButton = document.querySelector('.nav-toggle-off');

const popup = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


// Opening and closing main menu

document.querySelector('.nav-toggle').addEventListener('click', function (evt) {
  mainMenu.classList.toggle('main-menu--active');
  userMenu.classList.toggle('user-menu--active');
  evt.target.classList.toggle('nav-toggle--close');
});


// Opening popup for choosing goods sizes, an overlay will appear

document.querySelector('.bestseller__order-button').addEventListener('click', function () {
  popup.classList.add('modal--active');
  overlay.classList.add('overlay--active');
});


// Closing popup when clicking on the overlay

document.querySelector('.overlay').addEventListener('click', function () {
  popup.classList.remove('modal--active');
  overlay.classList.remove('overlay--active');
});


// Preventing close popup

popup.addEventListener("click", function (evt) {
  evt.stopPropagation();
});


// Selecting certain size

document.querySelector('.size-select').addEventListener('click', function (evt) {
  evt.preventDefault();
  evt.target.classList.toggle('size__link--active');
});
