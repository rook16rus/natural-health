import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function leadSlider() {
    const sliders = document.querySelectorAll('.lead-slider');

    sliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            effect: "fade",
            allowTouchMove: false,
            fadeEffect: {
                crossFade: true
            }
        })

        const navigationItems = slider.querySelectorAll('.lead-slider__navigation-item');

        navigationItems.forEach((navItem, index) => {
            navItem.addEventListener('mouseenter', e => {
                navigationItems.forEach(navItemEl => navItemEl.classList.remove('active'));
                e.currentTarget.classList.add('active');

                swiper.slideTo(index);
            })
        })
    })
}