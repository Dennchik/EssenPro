import { swiperLayout } from "../layouts/swiper-layout";
swiperLayout('_swiper');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';

export function thumbCardSlide(
	mainslide = '.product-slide',
) {
	if (mainslide) {
		let swiper = new Swiper('.thumb-slide', {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
			updateOnWindowResize: true,

		});

		let swiper2 = new Swiper('.product-slide__slide', {
			spaceBetween: 10,
			speed: 800,
			loop: true,
			slidesPerView: 1,
			updateOnWindowResize: true,
			thumbs: {
				swiper: swiper,
			},
		});
	}
}

