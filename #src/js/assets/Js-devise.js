const isMobile = {
	Android: () => /Android/i.test(navigator.userAgent),
	BlackBerry: () => /BlackBerry/i.test(navigator.userAgent),
	iOS: () => /iPhone|iPad|iPod/i.test(navigator.userAgent),
	Opera: () => /Opera Mini/i.test(navigator.userAgent),
	Windows: () => /IEMobile/i.test(navigator.userAgent),
	smallerThan960px: () => window.innerWidth < 960,

	any: () => (
		isMobile.Android() ||
		isMobile.BlackBerry() ||
		isMobile.iOS() ||
		isMobile.Opera() ||
		isMobile.Windows() ||
		isMobile.smallerThan960px()
	)
};

export default isMobile;
