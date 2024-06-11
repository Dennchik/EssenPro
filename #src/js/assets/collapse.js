export default class ItcCollapse {
	constructor(target, duration = 350) {
		this._target = target;
		this._duration = duration;
	}
	show() {
		const el = this._target;
		if (el.classList.contains('collapsing') || el.classList.contains('_show')) {
			return;
		}
		el.classList.remove('_collapse');
		const height = el.offsetHeight;
		el.style.height = 0;
		el.style.overflow = 'hidden';
		el.style.transition = `height ${this._duration}ms ease`;
		el.classList.add('collapsing');
		el.offsetHeight;
		el.style.height = `${height}px`;
		window.setTimeout(() => {
			el.classList.remove('collapsing');
			el.classList.add('_collapse');
			el.classList.add('_show');
			el.style.height = '';
			el.style.transition = '';
			el.style.overflow = '';

		}, this._duration);
	}
	hide() {
		const el = this._target;
		if (el.classList.contains('collapsing') || !el.classList.contains('_show')) {
			return;
		}
		el.style.height = `${el.offsetHeight}px`;
		el.offsetHeight;
		el.style.height = 0;
		el.style.overflow = 'hidden';
		el.style.transition = `height ${this._duration}ms ease`;
		el.classList.remove('_collapse');
		el.classList.remove('_show');
		el.classList.add('collapsing');
		window.setTimeout(() => {
			el.classList.remove('collapsing');
			el.classList.add('_collapse');
			el.style.height = '';
			el.style.transition = '';
			el.style.overflow = '';
		}, this._duration);
	}
	toggle() {
		this._target.classList.contains('_show') ? this.hide() : this.show();
	}
};

// -------------------------(Initialize Swiper)-------------------------------
// const collapse = new ItcCollapse(item.querySelector('._collapse'));
// collapse.toggle();
// // }
// export default _collapse;