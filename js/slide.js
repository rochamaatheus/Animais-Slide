export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
  }

  onStart(event) {
    event.preventDefault();
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', () => this.onStart);
  }

  init() {
    this.addSlideEvents();
    return this;
  }
}
