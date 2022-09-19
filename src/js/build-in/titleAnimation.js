import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function titleAnimation() {
    const titles = document.querySelectorAll('.js-title-animate');

    titles.forEach(title => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                start: "top 80%"
            }
        })

        tl.from(title, {
            y: "100%",
            duration: 0.8,
            delay: title.dataset.delay ? title.dataset.delay : 0
        })
    })
}