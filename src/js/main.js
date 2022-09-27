import './build-in/lazyload';

import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
import anchorLinks from './build-in/anchorLinks';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';
import initSliders from "./custom/initSliders";
import fancybox from "./build-in/fancybox";
import validation from "./build-in/validation";
import masks from "./build-in/masks";
import modals from "./build-in/modals";
import yandexMap from "./build-in/yandexMap";
import fileInputs from "./build-in/fileInputs";
import alignHeights from "./custom/alignHeights";
import roundText from "./build-in/roundText";
import introSlider from "./build-in/introSlider";
import featuresSlider from "./build-in/featuresSlider";
import leadSlider from "./build-in/leadSlider";
import alignWidths from "./custom/alignWidths";
import footerSchedule from "./build-in/footerSchedule";
import inputPlaceholder from "./build-in/inputPlaceholder";
import aboutMoreButton from "./build-in/aboutMoreButton";
import awardsSlider from "./build-in/awardsSlider";
import sectionAnimation from "./build-in/sectionAnimation";
import titleAnimation from "./build-in/titleAnimation";
import introAnimation from "./build-in/introAnimation";
import header from "./build-in/header";
import customSelects from "./build-in/customSelects";
import catalogPrice from "./build-in/catalogPrice";
import multiselects from "./build-in/multiselects";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    initSliders();
    editableTextContainer();

    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    validation();
    modals();
    masks();
    fancybox();
    yandexMap();
    fileInputs();
    roundText();
    leadSlider();
    footerSchedule();
    inputPlaceholder();
    aboutMoreButton();
    awardsSlider();
    introAnimation();
    header();
    customSelects();
    catalogPrice();
    multiselects();

    alignHeights('.lines__list', '.lines__item-title');
    alignHeights('.catalog-list', '.catalog-list__price-block');
    alignWidths('.footer__menu', '.footer__menu-schedule-value');
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

document.fonts.ready.then((res) => {
    featuresSlider();
})

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => {
        document.body.classList.add('animatable')
    }, 300);
});
