export function anchorsSmoothScrolling() {
	document.addEventListener('DOMContentLoaded', function () {
		const anchorLinks = document.querySelectorAll('.anchor-link');
		anchorLinks.forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('href').substring(1);
				const targetElement = document.getElementById(targetId);

				const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
				const offsetPosition = targetPosition - 150; // 150px отступ сверху

				const sidebarMenu = e.target.closest('.sidebar-menu');
				if (sidebarMenu && sidebarMenu.classList.contains('_opened-menu')) {
					const burgerButton = document.querySelector('.toggle-button__toggle-menu');
					sidebarMenu.classList.remove('_opened-menu');
					burgerButton.classList.remove('_open');
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
