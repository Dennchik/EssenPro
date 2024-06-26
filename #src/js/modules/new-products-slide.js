import { swiperLayout } from "../layouts/swiper-layout";
swiperLayout();
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';
export function newProductsSlide(
	mainslide = '.products__content',
	nextEl = '.products__button-next',
	prevEl = '.products__button-prev',

) {
	if (mainslide) {
		new Swiper(mainslide, {
			speed: 800,
			spaceBetween: 20,
			// loop: true,
			grabCursor: true,
			// autoHeight: true,
			// mousewheel: true,
			// centeredSlides: true,
			slidesPerView: 4,
			navigation: {
				nextEl: nextEl,
				prevEl: prevEl,
			},
			breakpoints: {
				200: {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				620: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				870: {
					slidesPerView: 3,
				},
				1140: {

					spaceBetween: 50,
					slidesPerView: 4,
				},

			}
		});
	}
}
// -----------------------------------------------------------------------------




