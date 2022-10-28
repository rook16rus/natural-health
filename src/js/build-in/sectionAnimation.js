import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function sectionAnimation() {
    const sections = document.querySelectorAll('.js-section-animate');

    sections.forEach(section => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            }
        })

        tl.fromTo(section, {
            y: "3rem",
            opacity: 0,
            duration: 1,
            delay: section.dataset.delay ? section.dataset.delay : 0
        }, {
            duration: 1,
            opacity: 1,
            y: "0rem",
            clearProps: 'transform'
        })
    })
}

window.initSectionAnimation = sectionAnimation;