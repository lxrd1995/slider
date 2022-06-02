import { Slider } from './slider.js';

const slider = new Slider(".slider", {
	slideToShow: 1,
	slideToScroll: 1,

	// navigation arrow
	navigation: {
		buttonPrev: ".slider-button-prev",
		buttonNext: ".slider-button-next",
	}
});

window.s = slider;