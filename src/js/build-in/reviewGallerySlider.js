import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function reviewGallerySlider() {

    const swiperThumb = new Swiper('.modal-review__gallery', {
        slidesPerView: "auto",
    })

    const swiper = new Swiper('.modal-review__slider', {
        slidesPerView: 1,
        speed: 1500,
        effect: "fade",
        thumbs: {
            swiper: swiperThumb
        },
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.js-next-slide',
            prevEl: '.js-prev-slide',
        },
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
            formatFractionCurrent: function (number) {
                return String(number).length > 1 ? number : '0' + number;
            },
            formatFractionTotal: function (number) {
                return String(number).length > 1 ? number : '0' + number;
            }
        },
    })
}