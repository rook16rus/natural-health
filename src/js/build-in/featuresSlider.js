import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function featuresSlider() {
    /*const swiper = new Swiper('.features__slider', {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 0
        }
    })*/

    let number = -500;

    const wrapper = document.querySelector('.features .swiper-wrapper');
    let count = 0;

    setInterval(() => {
        wrapper.style.transform = `translateX(${number}px)`;
        number = number - 500;


    }, 8000);

    setInterval(() => {
        const slides = wrapper.querySelectorAll('.swiper-slide');
        const clone = slides[count].cloneNode(true);
        wrapper.appendChild(clone);

        count++
    }, 5000)
}