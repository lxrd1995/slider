export class Slider {
	constructor(selector, options) {
		this.$slider = document.querySelector(selector);


		this.position = 0;
		this.options = options;
		this.slidesToShow = options.slideToShow;
		this.slideToScroll = options.slideToScroll;
		this.navigation = options.navigation;

		this.#setup();
	}

	#setup() {
		this.clickHandler = this.clickHandler.bind(this);

		this.$wrapper = this.$slider.querySelector(".slider-wrapper");
		this.$items = this.$wrapper.querySelectorAll(".slider-slide");

		this.itemWidth = this.$wrapper.clientWidth / this.slidesToShow;
		this.movePosition = this.slideToScroll * this.itemWidth;

		this.$slider.addEventListener("click", this.clickHandler);

		this.$buttonPrev = this.$slider.querySelector(this.navigation.buttonPrev);
		this.$buttonNext = this.$slider.querySelector(this.navigation.buttonNext);

		this.$items.forEach(item => {
			item.style.minWidth = `${this.itemWidth}px`;
		});
	}

	clickHandler(event) {
		const { className } = event.target;

		if (className === "slider-button-prev") {
			this.prev();
		} else if (className === "slider-button-next") {
			this.next();
		}

	}
	prev() {
		this.position += this.movePosition;
		this.setPosition();
	}
	next() {
		this.position -= this.movePosition;
		this.setPosition();
	}

	setPosition() {
		this.$wrapper.style.transform = `translateX(${this.position}px)`;
	}
}