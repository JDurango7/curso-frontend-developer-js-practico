let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleMenu);

function toggleMenu(){
desktopMenu.classList.toggle('inactive');
}