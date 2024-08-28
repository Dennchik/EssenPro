import { select } from './modules/itsSelect.js';
import { counterProducy } from "./layouts/counter.js";
import ItcCollapse from "./assets/collapse.js";

// -----------------------------------------------------------------------------
const toggleWrap = document.querySelector('.toggle-wrap');
const sidebarMenu = document.querySelector('.personal-account__column');
toggleWrap.addEventListener('click', addClassOpen);
const menuPageSide = document.querySelector('.toggle-menu');
function addClassOpen() {
	menuPageSide.classList.toggle('_open');
	sidebarMenu.classList.toggle('_opened-menu');;
}
// -----------------------------------------------------------------------------
const userBarList = document.querySelector('.user-bar__list');
const userBarItems = document.querySelectorAll('.user-bar__item');

userBarItems.forEach(userBarItem => {
	userBarItem.addEventListener('click', () => {
		const loaded_doc = userBarList.querySelector('._active');
		_toggledDoc(userBarItem);
		if (loaded_doc && loaded_doc !== userBarItem) {
			_toggledDoc(loaded_doc);
		}
		if (loaded_doc && loaded_doc === userBarItem) {
			_toggledDoc(userBarItem);
		}
	});
});
const _toggledDoc = (userBarItem) => {
	if (userBarItem.classList.contains('_active')) {
		userBarItem.classList.remove('_active');
		menuPageSide.classList.remove('_open');
		sidebarMenu.classList.remove('_opened-menu');
	} else {
		userBarItem.classList.add('_active');
	}
};
// -----------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	const currentItem = document.querySelector('.bread-crumbs__current-item');
	const content = document.querySelector('.personal-account__personal-data');

	function bindEvents() {
		const links = document.querySelectorAll('.link');
		links.forEach(link => {
			link.addEventListener('click', function () {
				const page = this.getAttribute('data-page');
				currentItem.textContent = this.textContent;
				loadPage(page);
			});
		});
	}

	function loadPage(page) {
		fetch(`user-data/${page}.html`)
			.then(response => response.text())
			.then(innerContent => {
				content.innerHTML = innerContent;
				bindEvents(); // Повторно привязываем события после загрузки контента

				if (page === 'order-cart') {
					select();
					counterProducy();
					placeOrder();
				} else if (page === 'feed-back') {
					select();
				} else if (page === 'history-order') {
					sleectData();
				} else if (page === 'user-favourites') {
					counterProducy();
				}

			})
			.catch(error => {
				console.error('Error loading page:', error);
				content.innerHTML = 'Error loading content';
			});
	}

	bindEvents(); // Вызываем в начале, чтобы привязать события к уже существующим ссылкам
	// Находим элемент с классом "_active" и получаем значение атрибута data-page
	const activeItem = document.querySelector('.user-bar__item._active .link');
	if (activeItem) {
		const page = activeItem.getAttribute('data-page');
		loadPage(page); // Загружаем страницу, указанную в атрибуте data-page
	}
});

function sleectData() {
	const datePeriod = document.querySelector('.date-period');
	if (datePeriod) {

		const startDateInput = document.getElementById('start-date');
		const endDateInput = document.getElementById('end-date');

		startDateInput.addEventListener('change', function () {
			console.log('Start date selected:', startDateInput.value);
			validateDates();
		});

		endDateInput.addEventListener('change', function () {
			console.log('End date selected:', endDateInput.value);
			validateDates();
		});

		function validateDates() {
			const startDate = new Date(startDateInput.value);
			const endDate = new Date(endDateInput.value);

			if (startDate > endDate) {
				alert('Дата "до" не может быть раньше даты "от".');
			} else {
				console.log(`Выбранный диапазон дат: От ${startDate.toLocaleDateString()} до ${endDate.toLocaleDateString()}`);
			}
		}
	}
}
// ---------------------Оформить заказ--------------------------------
function placeOrder() {
	let orderCollapse = document.querySelector('.send-order');
	const collapse = new ItcCollapse(orderCollapse.querySelector('._collapse'));
	const elcheckboxLabelement = document.querySelector('.order-place__checkbox');

	document.querySelector('.order-place__form-button').addEventListener('click', function () {
		let sendButton = document.querySelector('.order-place__send-button');
		let formButton = document.querySelector('.order-place__form-button');
		collapse.toggle();
		sendButton.style.display = 'block';
		formButton.style.display = 'none';
		elcheckboxLabelement.style.display = 'block';
	});
}
