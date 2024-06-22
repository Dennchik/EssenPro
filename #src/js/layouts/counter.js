export function counterProducy() {
	const counters = document.querySelectorAll('[data-quantity]');


	if (counters) {

		counters.forEach(counter => {
			document.addEventListener('DOMContentLoaded', function () {
				let disabledButton = counter.querySelector('.quantity-remove');
				disabledButton.classList.add('_disabled');
			});

			counter.addEventListener('click', (e) => {
				let target = e.target;
				console.log(target);
				if (target.closest('.quantity__button')) {
					let input = target.closest('.quantity').querySelector('input');
					let value = parseInt(input.value) || 0;

					if (target.classList.contains('quantity-add')) {
						console.log(input);
						value++;
					} else {
						value--;
					}
					if (value <= 0) {
						value = 0;
						_opacityAdd(input);
					} else {
						_opacityRemove(input);
					}

					input.value = value;
				}
			});

		});
	}

	function _opacityAdd(input) {
		input.closest('.quantity').querySelector('.quantity-remove').classList.add('_disabled');
	}

	function _opacityRemove(input) {
		input.closest('.quantity').querySelector('.quantity-remove').classList.remove('_disabled');
	}

}