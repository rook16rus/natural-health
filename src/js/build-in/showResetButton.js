export default function showResetButton() {
    const filterForm = document.querySelector('.catalog__filter-form');
    if (!filterForm) return;

    const resetButton = document.querySelector('.catalog__filter-button');
    window.catalogResetButton = resetButton;

    [...filterForm.elements].forEach(el => {
        el.addEventListener('change', () => {
            if (resetButton.classList.contains('visually-hidden')) {
                resetButton.classList.remove('visually-hidden');
            }
        })
    })

    resetButton.addEventListener('click', () => {
        resetButton.classList.add('visually-hidden');

        const selects = filterForm.querySelectorAll('.js-multi-select');

        selects.forEach(select => {
            const header = select.querySelector('.js-multi-select-header');
            const countBlock = select.querySelector('.js-multi-select-count-block');

            header.classList.remove('active')
            countBlock.classList.remove('active')
        })

        const arr = [...filterForm.elements]
            .filter(input => input.classList.contains('catalog__filter-price-input'))
            .map(input => input.dataset.startValue);

        window.priceRange.set(arr)
    });
}