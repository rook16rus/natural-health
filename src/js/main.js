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
    introSlider();
    roundText();
    featuresSlider();
    alignHeights('.lines__list', '.lines__item-title');
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

document.fonts.ready.then((res) => {

})

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => {
        document.body.classList.add('animatable')
    }, 300);
});
