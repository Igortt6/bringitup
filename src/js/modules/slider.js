export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slidesIndex = 1;
        this.duration = 1000,
            this.start = 0;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slidesIndex = 1;
        }
        if (n < 1) {
            this.slidesIndex = this.slides.length;
        }

        this.slides.forEach(slide => {                                      // ховаємо всі слайди
            slide.style.display = 'none'
        });

        this.slides[this.slidesIndex - 1].style.display = 'block'           // показуємо 0вий слайн
    }

    plusSlides(n) {
        this.showSlides(this.slidesIndex += n);
    }


    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slidesIndex = 1;
                this.showSlides(this.slidesIndex)
            })
        });

        this.showSlides(this.slidesIndex);                                  // визиваємо для первинної ініціалізації 

    }
}