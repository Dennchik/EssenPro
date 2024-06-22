import { counterProducy } from "./layouts/counter.js";
counterProducy();

// -----------------------------------------------------------------------------
let cardFavourites = document.querySelectorAll('.card__favourites');
cardFavourites.forEach(cardFavourit => {
	cardFavourit.addEventListener('click', () => {
		cardFavourit.classList.toggle('_like');
	});
});
// -----------------------------------------------------------------------------
const toggleButton = document.querySelector('.toggle-catalog');
toggleButton.addEventListener('click', () => {
	const sidebarCategories = document.querySelector('.categories__side-bar');
	sidebarCategories.classList.toggle('_active');
	toggleButton.classList.toggle('_active');
});