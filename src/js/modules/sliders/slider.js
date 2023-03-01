export default class Slider {
    constructor({ page = '', btns = '', next = '', prev = '', animationDuration = '' } = {}) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slidesIndex = 1;
        this.duration = animationDuration;
        this.start = 0;
    }

}