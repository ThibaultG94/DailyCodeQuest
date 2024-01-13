const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const button = document.getElementById('button');
const modalClose = document.querySelector('.modal-close');
const closeButton = document.getElementById('closeButton');
const navbarToggle = document.getElementById('navbarToggle');
const navbar = document.getElementById('navbar');
const navbarLinks = document.querySelectorAll('.navbar a');

button.addEventListener('click', () => {
	modalOverlay.classList.add('modal-active');
	modal.classList.add('modal-active');
});

modalClose.addEventListener('click', () => {
	modalOverlay.classList.remove('modal-active');
	modal.classList.remove('modal-active');
});

closeButton.addEventListener('click', () => {
	modalOverlay.classList.remove('modal-active');
	modal.classList.remove('modal-active');
});

navbarToggle.addEventListener('click', function () {
	navbar.classList.toggle('responsive');
});
