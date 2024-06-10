//* --------------------------------[jScript]-----------------------------------
export default function loaded(item) {
	window.onload = function () {
		document.querySelector(item).classList.add("preloader-remove");
		document.documentElement.classList.add('loaded');
	};
}