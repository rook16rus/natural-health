import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function featuresSlider() {
    const swiper = new Swiper('.features__slider', {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        allowTouchMove: false
    })

    swiper.slideNext();
    swiper.on('slideNextTransitionEnd', () => {
        swiper.slideNext();
    })
}