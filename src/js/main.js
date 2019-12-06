const mainMenu = document.querySelector('.main-menu');
const userMenu = document.querySelector('.user-menu');
const openMenuButton = document.querySelector('.nav-toggle-off');
const closeMenuButton = document.querySelector('.nav-toggle-on');
const popup = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Opening main menu
openMenuButton.addEventListener('click', function () {
  mainMenu.classList.add('main-menu--active');
  userMenu.classList.add('user-menu--active');
  openMenuButton.classList.remove('nav-toggle-off--active');
  closeMenuButton.classList.add('nav-toggle-on--active');
})

// Closing main menu
closeMenuButton.addEventListener('click', function () {
  mainMenu.classList.remove('main-menu--active');
  userMenu.classList.remove('user-menu--active');
  closeMenuButton.classList.remove('nav-toggle-on--active');
  openMenuButton.classList.add('nav-toggle-off--active');
})


// Opening popup to choose goods sizes, an overlay will appear
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

document.querySelector('.size-select').addEventListener('click', (evt) => {
  evt.preventDefault();
  evt.target.classList.toggle('size__link--active');
});
