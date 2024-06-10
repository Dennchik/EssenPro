export function anchorsSmoothScrolling() {
	document.addEventListener('DOMContentLoaded', function () {
		const sideBarInfo = document.querySelector('.side-info__info');
		// Добавляем плавную прокрутку с учетом отступа 150px сверху
		const anchorLinks = document.querySelectorAll('.anchor-link');
		anchorLinks.forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('href').substring(1);
				const targetElement = document.getElementById(targetId);
				const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
				const offsetPosition = targetPosition - 150; // 150px отступ сверху
				if (link.classList.contains('side-info__link')) {
					sideBarInfo.classList.remove('_open');
				}

				if (link.classList.contains('menu-side-bar__link')) {
					const sidebarMenu = document.querySelector('.page__sidebar-menu');
					const burgerButton = document.querySelector('.burger-button');
					console.log(sidebarMenu);
					sidebarMenu.classList.remove('_opened-menu');
					burgerButton.classList.remove('_active');
					document.body.classList.remove('no-scroll');
				}

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			});
		});
	});
}