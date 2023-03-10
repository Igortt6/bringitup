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
        this.slides[0].classList.add(this.activeClass);


        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            do {
                this.container.appendChild(this.slides[0])              //Переміщяємо перший слайд, в кінець слайдів
            } while (this.slides[0].tagName === 'BUTTON') {
                this.decorizeSlides();
            }
        });

        this.prev.addEventListener('click', () => {
            do {
                this.container.prepend(this.slides[this.slides.length - 1])
            } while (this.slides[0].tagName === 'BUTTON') {
                this.decorizeSlides();

            }
        })
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            aling-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlides();
        } catch (e) { }
    }
}