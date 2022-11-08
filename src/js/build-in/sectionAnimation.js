import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function sectionAnimation() {
    const sections = document.querySelectorAll('.js-section-animate');

    sections.forEach(section => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 90%"
            }
        })

        tl.fromTo(section, {
            y: 30,
            opacity: 0,
            delay: section.dataset.delay ? section.dataset.delay : 0
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            clearProps: 'transform'
        })
    })
}

window.initSectionAnimation = sectionAnimation;