// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Parallax Effect
gsap.to("#hero-bg", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  scale: 1.3,
  y: 100,
  duration: 1,
});

// Reveal Animations
const reveals = gsap.utils.toArray(".reveal");

reveals.forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    {
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
      stagger: 0.2,
    },
  );
});

// Product Card Hover (Optional additional JS if needed, but CSS handles well)
// We can add a subtle floating effect to product cards
gsap.to(".product-card", {
  y: "-=10",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.5,
});

// Initial load animation for hero
window.addEventListener("load", () => {
  const tl = gsap.timeline();
  tl.to(".bg-image", {
    opacity: 1,
    scale: 1.1,
    duration: 2,
    ease: "power2.out",
  }).to(
    "h1.reveal",
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "power4.out",
    },
    "-=1",
  );
});
