export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.message = {
            loading: 'Завантаження...',
            success: 'Дякую, ми з вами звʼяжемось',
            fail: "Щось пішло не так..."
        };
        this.path = 'assets/question.php '

    }

    clearInputs() {
        this.inputs.forEach(item => {
            item.value = '';
        });
    }
    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');

        mailInputs.forEach(input => {
            input.addEventListener('keypress', function (e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }
    initMask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {          // поліфіл для EntExplorer
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }

        function createMask(event) {
            let matrix = '+1 (___) ____-___',
                i = 0,
                def = matrix.replace(/\D/g, ''),        // значення на основі матриці
                val = this.value.replace(/\D/g, '');    // значення на основі введені користувачем

            if (def.length >= val.length) {             // заборона користувачю знінювати маску
                val = def;
            }

            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
                // перевіряємо кожний введений символ. Якщо ЦИФРА 'i' меньше введених цифр,  повертаємо наступний символ. Якщо 'i' більше введених цифр, повертаємо ''. При всіх інших повертаємо просто символ
            })

            if (event.type === 'blur') {                //Якщо фокус вийшов з форми
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {                                    //Якщо подія ФОКУС, або ІНПУТ
                setCursorPosition(this.value.length, this)
            }
        }

        let inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        })
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    init() {
        this.checkMailInputs();
        this.initMask();
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: gray;
                `;
                item.appendChild(statusMessage);

                statusMessage.textContent = this.message.loading;

                const formData = new FormData(item);

                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.fail;

                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    })
            })
        });
    }
}