//todo --------------------------(Swiper layout)--------------------------------
export function swiperLayout() {
	let slides = document.querySelectorAll('._swiper');
	if (slides) {
		for (let index = 0; index < slides.length; index++) {
			let slide = slides[index];
			if (!slide.classList.contains('swiper-build')) {
				let slide_items = slide.children;
				if (slide_items) {
					for (let index = 0; index < slide_items.length; index++) {
						let el = slide_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slide_content = slide.innerHTML;
				let slide_wrapper = document.createElement('div');
				slide_wrapper.classList.add('swiper-wrapper');
				slide_wrapper.innerHTML = slide_content;
				slide.innerHTML = '';
				slide.appendChild(slide_wrapper);
				slide.classList.add('swiper-build');
			}
			// if (slide.classList.contains('_gallery')) {
			// slide.data('lightGallery').destroy(true);
			// }
		}
		slides_build_callback();
	}

	function slides_build_callback(e) {

	}
}
