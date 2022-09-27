export default function categoriesSelect() {
    const categoriesSection = document.querySelectorAll('.js-categories');

    categoriesSection.forEach(categories => {
        const selects = categories.querySelectorAll('.js-categories-select');

        selects.forEach(select => {
            const selectHeader = select.querySelector('.js-categories-select-header');
            const selectItems = select.querySelectorAll('.js-categories-select-item');

            selectHeader.addEventListener('click', () => {
                select.classList.toggle('active');
            });

            document.addEventListener('click', e => {
                const targetSelect = e.target.closest('.js-categories-select');
                if (!targetSelect || targetSelect !== select) select.classList.remove('active')
            })

            const selectCloseButton = select.querySelector('.js-categories-select-close');
            if (!selectCloseButton) return;

            selectCloseButton.addEventListener('click', () => {
                select.classList.remove('active');
            })
        })
    })
}