export function counterProducy() {
	const counters = document.querySelectorAll('[data-quantity]');
	const productPrices = document.querySelectorAll('.product-price');

	if (counters) {
		counters.forEach(counter => {
			let input = counter.querySelector('input');

			let disabledButton = counter.querySelector('.quantity-remove');
			if (input.value === '0') {
				disabledButton.classList.add('_disabled');
			}

			counter.addEventListener('click', (e) => {
				let target = e.target;
				if (target.closest('.quantity__button')) {
					let input = target.closest('.quantity').querySelector('input');
					let value = parseInt(input.value) || 0;

					if (target.classList.contains('quantity-add')) {

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
					_totalSum();
				}
			});

			input.addEventListener('input', function (e) {
				this.value = this.value.replace(/[^0-9.]/g, '');
			});


		});
	}

	function _opacityAdd(input) {
		input.closest('.quantity').querySelector('.quantity-remove').classList.add('_disabled');
	}

	function _opacityRemove(input) {
		input.closest('.quantity').querySelector('.quantity-remove').classList.remove('_disabled');
	}
	function _totalSum() {
		let totalSum = 0;
		productPrices.forEach(productPrice => {
			const inputTotal = document.querySelector('.input-total');
			let valuePrice = parseFloat(productPrice.textContent.replace(/ /g, '').
				replace(',', '.')) || 0;
			let quantity = parseFloat(productPrice.closest('.product-cart').querySelector('input').value) || 0;
			let totalSumProduct = valuePrice * quantity;
			totalSum += totalSumProduct;

			productPrice.closest('.product-cart').querySelector('.product-cart__quantity-price').textContent = totalSumProduct.toLocaleString('ru-RU', {
				style: 'currency',
				currency: 'RUB',
				minimumFractionDigits: 0,
			});
			inputTotal.innerHTML = 'Итого:' + ' ' + totalSum.toLocaleString() + `<i class="icon-rub"></i>`;
		});
	}

	_totalSum();

}