export default class Slider {
    constructor({ container = null, btns = null, next = null, prev = null,
        activeClass = null,
        animate = false,
        autoplay } = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.slidesIndex = 1;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }

}