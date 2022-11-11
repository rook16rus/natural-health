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
import categories from "./build-in/categories";
import showResetButton from "./build-in/showResetButton";
import productSlider from "./build-in/productSlider";
import accordions from "./build-in/accordions";
import readMoreButton from "./build-in/readMoreButton";
import datepicker from "./build-in/datepicker";
import orderTabs from "./build-in/orderTabs";
import payment from "./build-in/payment";
import pickupMap from "./build-in/pickupMap";
import mapShow from "./build-in/mapShow";
import copyText from "./build-in/copyText";
import contactsMap from "./build-in/contactsMap";
import hideAddLink from "./build-in/hideAddLink";
import reviewGallerySlider from "./build-in/reviewGallerySlider";
import modalFix from "./build-in/modalFix";
import pressFilter from "./build-in/pressFilter";
import minimizeWidth from "./custom/minimizeWidth";
import filterCount from "./build-in/filterCount";

gsap.registerPlugin(ScrollTrigger);

window.catalogResetButtons = [];
window.priceRanges = [];
history.scrollRestoration = 'manual';

document.addEventListener('DOMContentLoaded', function () {
    editableTextContainer();

    datepicker();
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
    showResetButton();
    catalogPrice();
    multiselects();
    categories();
    productSlider();
    accordions();
    readMoreButton();
    orderTabs();
    payment();
    pickupMap();
    mapShow();
    copyText();
    contactsMap();
    hideAddLink();
    reviewGallerySlider();
    modalFix();
    pressFilter();
    filterCount();

    alignHeights('.lines__list', '.lines__item-title');
    alignHeights('.catalog-list:not(.catalog-list--search)', '.catalog-list__price-block');
    alignWidths('.footer__menu', '.footer__menu-schedule-value');
    minimizeWidth();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

document.fonts.ready.then((res) => {
    featuresSlider();
    initSliders();
})

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => {
        document.body.classList.add('animatable')
    }, 300);
});
