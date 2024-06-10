import { swiperLayout } from "../layouts/swiper-layout";
swiperLayout();
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';
export function saleProductsSlide(
	mainslide = '.sale-products__content',
	nextEl = '.sale-products__button-next',
	prevEl = '.sale-products__button-prev',

) {
	if (mainslide) {
		new Swiper(mainslide, {
			speed: 800,
			spaceBetween: 50,
			loop: true,
			grabCursor: true,
			// autoHeight: true,
			// mousewheel: true,
			// centeredSlides: true,
			slidesPerView: 5,
			navigation: {
				nextEl: nextEl,
				prevEl: prevEl,
			},
			breakpoints: {
				200: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				376: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				490: {
					spaceBetween: 30,
					slidesPerView: 3,
				},
				768: {

					spaceBetween: 40,
					slidesPerView: 4,
				},
				1025: {
					slidesPerView: 5,
				}
			}
		});
	}
}