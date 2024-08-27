document.addEventListener('DOMContentLoaded', function () {
	const activeItem = document.querySelector('.user-bar__item._active .link');

	// Функция для изменения атрибута data-page в зависимости от типа пользователя
	function setDataPage(userType) {
		if (userType === 'legal') {
			// Если юридическое лицо
			activeItem.setAttribute('data-page', 'ure-personal-data');
			activeItem.textContent = 'Профиль юридического лица';
		} else if (userType === 'individual') {
			// Если физическое лицо
			activeItem.setAttribute('data-page', 'user-personal-data');
			activeItem.textContent = 'Профиль физического лица';
		}
	}

	// Пример события, когда определен тип пользователя
	// В реальной ситуации этот тип может передаваться с сервера или храниться в переменной
	const userType = 'legal'; // Меняйте это значение на 'individual' для теста

	// Вызываем функцию для установки нужного атрибута
	setDataPage(userType);

	// Пример события при клике, которое изменяет значение data-page
	activeItem.addEventListener('click', function () {
		console.log('Текущий data-page:', activeItem.getAttribute('data-page'));
	});
});
