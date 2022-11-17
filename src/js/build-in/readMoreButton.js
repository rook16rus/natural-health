export default function readMoreButton() {
    const buttons = document.querySelectorAll('.js-read-button');

    if (!matchMedia('(max-width: 640px)').matches) return

    buttons.forEach(button => {
        const container = button.closest('.wide-text-container');
        if (!container) return

        let buttonIndex;
        const hideElements = [];

        [...container.children].forEach((el, index) => {
            if (el === button || el.querySelector('.js-read-button') === button) buttonIndex = index;

            if (buttonIndex && index > buttonIndex) {
                el.classList.add('hide');
                hideElements.push(el);

                el.remove();
                container.insertBefore(el, button);
            }
        })

        button.addEventListener('click', () => {
            if (hideElements.find(item => item.classList.contains('hide'))) {
                button.textContent = 'Скрыть текст';
            } else {
                button.textContent = 'Читать полностью';
            }

            hideElements.forEach(el => el.classList.toggle('hide'))
        })
    })
}