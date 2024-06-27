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
			grabCursor: true,
			watchSlidesProgress: true,
			updateOnWindowResize: true,

			breakpoints: {
				200: {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				490: {
					spaceBetween: 10,
					slidesPerView: 4,
				},

				769: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				960: {
					spaceBetween: 20,
					slidesPerView: 4,
				},

			}

		});

		let swiper2 = new Swiper('.product-slide__slide', {
			spaceBetween: 10,
			speed: 800,
			loop: true,
			grabCursor: true,
			slidesPerView: 1,
			updateOnWindowResize: true,
			navigation: {
				prevEl: ".product-slide__prev",
				nextEl: ".product-slide__next",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
}

