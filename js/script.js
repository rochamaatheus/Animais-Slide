import { SlideNav } from './slide.js';

const slide = new SlideNav('.wrapper', '.slide', 'active');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl();
