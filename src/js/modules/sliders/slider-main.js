import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns, animationDuration = '200') {
        super(btns);
        this.duration = animationDuration;
        this.start = 0;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slidesIndex = 1;
        }

        if (n < 1) {
            this.slidesIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0'
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp')
                }, 3000)
            } else {
                this.hanson.classList.remove('slideInUp')
            }
        } catch (error) { }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slidesIndex - 1].style.display = 'block';
        this.start = Date.now();
        this.animateSlide(this.slides[this.slidesIndex - 1], this.start);
    }

    plusSlides(n) {
        this.showSlides(this.slidesIndex += n);
    }

    animateSlide(slide, start) {
        let progress,
            stamp = Date.now();

        progress = ((stamp - this.start) / this.duration).toFixed(1);

        slide.style.opacity = String(progress);

        if (slide.style.opacity >= 1) {
        } else {
            requestAnimationFrame(() => this.animateSlide(slide, start));
        }
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson')
            } catch (error) { }

            this.btns.forEach(item => {
                item.addEventListener('click', () => {
                    this.plusSlides(1);
                });

                item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.slidesIndex = 1;
                    this.showSlides(this.slidesIndex);
                });
            });

            this.showSlides(this.slidesIndex);
        };
    };
}