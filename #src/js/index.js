import { counterProducy } from "./layouts/counter.js";
counterProducy();
let cardFavourites = document.querySelectorAll('.card__favourites');
cardFavourites.forEach(cardFavourit => {
	cardFavourit.addEventListener('click', () => {
		cardFavourit.classList.toggle('_like');
	});
});