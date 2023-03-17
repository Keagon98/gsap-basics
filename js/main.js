"use strict";

// Landing Page Animations

const text = new SplitType('#landing-text');
let tl = gsap.timeline({
    defaults: {
        stagger: 0.15,
    }
});

tl.from(".char", 
{
    y: 550,
    duration: 1.1,
    ease: "in"
})

tl.from("#list-item", {
    x: 100,
    opacity: 0,
    ease: "in"
}, .8)

// Scroll Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from(".a", {
    scrollTrigger: {
        trigger: ".a",
        start: "50px 50%",
        end: "+=400",
        markers: true,
        toggleActions: "play pause resume none"
    },
    opacity: 0,
    ease: "in",
    y: 100,
    duration: 1
});

gsap.from(".b", {
    scrollTrigger: {
        trigger: ".b",
        start: "50px 50%",
        end: "+=400",
        markers: true,
        toggleActions: "play pause resume none"
    },
    opacity: 0,
    ease: "in",
    y: 100,
});

gsap.from(".c", {
    scrollTrigger: {
        trigger: ".c",
        start: "50px 50%",
        end: "+=400",
        markers: true,
        toggleActions: "play pause resume none"
    },
    opacity: 0,
    ease: "in",
    y: 100,
});




