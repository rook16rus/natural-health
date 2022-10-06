export default function readMoreButton() {
    const content = document.querySelector('.js-read-content');
    if (!content) return;

    const button = content.nextElementSibling;
    if (!button.classList.contains('js-read-button')) return;

    button.addEventListener('click', () => {
        if (content.classList.contains('active')) {
            button.textContent = 'Читать полностью';
        } else {
            button.textContent = 'Скрыть текст';
        }

        content.classList.toggle('active');
    })
}