import 'parsleyjs';
import $ from "jquery";

export default function validateOrder() {
    const orderButton = document.querySelector('.order__button');

    if (orderButton) {
        orderButton.addEventListener('click', e => {
            validateOrder();
        })
    }

    function validateOrder(form) {
        $(form).parsley().validate();
    }
}

const initValidateForm = validateOrder;