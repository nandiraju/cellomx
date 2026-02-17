// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Video Scrubbing Logic
const video = document.getElementById("hero-video");

// Ensure video is loaded enough to get duration
video.onloadedmetadata = function() {
    gsap.to(video, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1 // Smooth scrubbing
        },
        currentTime: video.duration || 0,
        ease: "none"
    });
};

// Reveal Animations
const reveals = gsap.utils.toArray('.reveal');

reveals.forEach(el => {
    gsap.fromTo(el, {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
    }, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2
    });
});

// Product Card Hover Floating Effect
gsap.to(".product-card", {
    y: "-=10",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.5
});

// Initial load animation for hero
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to("h1.reveal", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out"
    });
});
