import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }
    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.container.appendChild(this.slides[0])              //Переміщяємо перший слайд, в кінець слайдів
            this.decorizeSlides();
        });

        this.prev.addEventListener('click', () => {
            let active = this.slides[this.slides.length - 1];       // Виділяємо останній слайд
            this.container.insertBefore(active, this.slides[0])     // Переміщюємо на перше місце
            this.decorizeSlides();
        })
    }

    init() {
        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        aling-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();
    }
}