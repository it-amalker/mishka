const mainMenu = document.querySelector('.main-menu');
const userMenu = document.querySelector('.user-menu');
const openMenuButton = document.querySelector('.nav-toggle-off');
const closeMenuButton = document.querySelector('.nav-toggle-on');


openMenuButton.addEventListener('click', function () {
  mainMenu.classList.add('main-menu--active');
  userMenu.classList.add('user-menu--active');
  openMenuButton.classList.remove('nav-toggle-off--active');
  closeMenuButton.classList.add('nav-toggle-on--active');
})

closeMenuButton.addEventListener('click', function () {
  mainMenu.classList.remove('main-menu--active');
  userMenu.classList.remove('user-menu--active');
  closeMenuButton.classList.remove('nav-toggle-on--active');
  openMenuButton.classList.add('nav-toggle-off--active');
})
