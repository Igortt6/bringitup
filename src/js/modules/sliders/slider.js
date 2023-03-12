export default class Slider {
    constructor({ container = null, btns = null, next = null, prev = null, btnNextSmall = null, btnPrevSmall = null,
        activeClass = null,
        animate = false,
        autoplay } = {}) {
        this.container = document.querySelector(container);
        try { this.slides = this.container.children; } catch (e) { }
        this.btns = document.querySelectorAll(btns);
        this.btnNextSmall = document.querySelectorAll(btnNextSmall);
        this.btnPrevSmall = document.querySelectorAll(btnPrevSmall)
        this.slidesIndex = 1;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }

}