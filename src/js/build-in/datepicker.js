import AirDatepicker from 'air-datepicker';

export default function datepicker() {
    const elementsDate = document.querySelectorAll('.js-datepicker');

    elementsDate.forEach(element => {
       new AirDatepicker(element, {
           dateFormat: 'd MMM',
           minDate: 0,
       })
    });

    const elementsTime = document.querySelectorAll('.js-datepicker-time');

    elementsTime.forEach(element => {
        new AirDatepicker(element, {
            timepicker: true,
            onlyTimepicker: true,
        })
    })
}
