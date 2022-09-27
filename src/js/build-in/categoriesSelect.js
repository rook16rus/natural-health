export default function categoriesSelect() {
    const categoriesSection = document.querySelectorAll('.js-categories');

    categoriesSection.forEach(categories => {
        const select = categories.querySelector('.js-categories-select');
        const selectHeader = categories.querySelector('.js-categories-select-header');
        const selectItems = categories.querySelectorAll('.js-categories-select-item');

        selectHeader.addEventListener('click', () => {
            select.classList.toggle('active');
        });

        document.addEventListener('click', e => {
            const targetSelect = e.target.closest('.js-categories-select');
            if (!targetSelect || targetSelect !== select) select.classList.remove('active')
        })
    })
}