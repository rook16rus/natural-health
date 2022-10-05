import nouislider from "nouislider";

export default function catalogPrice() {
    const ranges = document.querySelectorAll('.js-price-range');

    ranges.forEach((range, index) => {
        const nous = nouislider.create(range, {
            start: [2800, 39999],
            connect: true,
            step: 1,
            range: {
                'min': [500],
                'max': [39999]
            }
        });
        window.priceRanges[index] = nous;

        const priceContainer = range.closest('.js-price-container');
        const price0 = priceContainer.querySelector('.price-0');
        const price1 = priceContainer.querySelector('.price-1');
        const prices = [price0, price1];

        nous.on('update', (values, handle) => {
            prices[handle].value = Math.round(values[handle]);
        });

        nous.on('change', (values, handle) => {
            if (window.catalogResetButtons[index].classList.contains('visually-hidden')) {
                window.catalogResetButtons[index].classList.remove('visually-hidden');
            }
        })

        prices.forEach((el, index) => {
            el.addEventListener('change', e => {
                const arr = [];
                arr[index] = e.currentTarget.value;

                nous.set(arr);
            })
        })
    })
}