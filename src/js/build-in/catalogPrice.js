import nouislider from "nouislider";

export default function catalogPrice() {
    const range = document.querySelector('.js-price-range');
    if (!range) return;

    const nous = nouislider.create(range, {
        start: [2800, 39999],
        connect: true,
        step: 1,
        range: {
            'min': [500],
            'max': [39999]
        }
    });

    const price0 = document.getElementById('price-0');
    const price1 = document.getElementById('price-1');
    const prices = [price0, price1];

    nous.on('update', (values, handle) => {
        prices[handle].value = Math.round(values[handle]);
    })

    prices.forEach((el, index) => {
        el.addEventListener('change', e => {
            const arr = [];
            arr[index] = e.currentTarget.value;

            nous.set(arr);
        })
    })
}