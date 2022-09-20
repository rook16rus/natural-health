import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function leadSlider() {
    const sliders = document.querySelectorAll('.lead-slider');

    sliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            effect: "fade",
            allowTouchMove: false,
            autoHeight: true,
            fadeEffect: {
                crossFade: true
            }
        })

        const navigationItems = slider.querySelectorAll('.lead-slider__navigation-item');

        navigationItems.forEach((navItem, index) => {
            if (matchMedia('(max-width: 1024px)').matches) {
                navItem.addEventListener('click', e => {
                    navigationItems.forEach(navItemEl => navItemEl.classList.remove('active'));
                    e.currentTarget.classList.add('active');

                    swiper.slideTo(index);
                })
            } else {
                navItem.addEventListener('mouseenter', e => {
                    navigationItems.forEach(navItemEl => navItemEl.classList.remove('active'));
                    e.currentTarget.classList.add('active');

                    swiper.slideTo(index);
                })
            }

            const container = navItem.closest('.lead-slider__navigation');
            const text = slider.querySelector(`.lead-slider__slide:nth-child(${index + 1}) .lead-slider__text`);

            console.log(text);

            text.style.setProperty('--navigation-height', container.clientHeight + 'px');
        })
    })
}