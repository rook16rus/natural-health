import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function introSlider() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    console.log(1);

    const swiper = new Swiper('.intro__slider', {
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: intro.querySelector('.js-next-slide'),
            prevEl: intro.querySelector('.js-prev-slide'),
        },
        pagination: {
            el: '.swiper-pagination',
            type: "fraction"
        }
    })
}