export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (error) { }
    }
    bindTriggers(selector, selectorItems, selectorCounter) {
        selector.querySelector('.plus').addEventListener('click', () => {
            if (selectorCounter !== selectorItems.length - 2) {
                selectorItems[selectorCounter].style.display = 'flex';
                selectorItems[selectorCounter].classList.add('animated', 'fadeIn')

                selectorCounter++;
            } else {
                selectorItems[selectorCounter].style.display = 'flex';
                selectorItems[selectorCounter].classList.add('animated', 'fadeIn')
                selectorItems[selectorItems.length - 1].classList.add('animated', 'fadeOutDown')
                setTimeout(() => {
                    selectorItems[selectorItems.length - 1].remove();

                }, 1000)
            }
        });
    }

    hideItems(selector) {
        // this.oldOfficer.querySelectorAll('.officer__card-item').forEach.....
        selector.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {

            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter)

        } catch (error) { }
    }
}