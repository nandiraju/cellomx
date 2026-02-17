gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("animation-canvas");
const context = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;

const frameCount = 192;
const currentFrame = index => (
  `assets/frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`
);

const images = [];
const sequence = {
  frame: 0
};

// Preload images
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

// Canvas Rendering logic
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (images[sequence.frame]) {
    context.drawImage(images[sequence.frame], 0, 0);
  }
}

// Scroll-driven animation
gsap.to(sequence, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: "#scroller",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.5
  },
  onUpdate: render
});

// Initial render
images[0].onload = render;

// Sticky Logo Animation (transparency pulse and slow rotation/float)
gsap.to("#sticky-logo", {
    opacity: 0.8,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.to("#sticky-logo", {
    y: -10,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Show/Hide Final CTA at the very end
ScrollTrigger.create({
    trigger: "#scroller",
    start: "95% bottom",
    onEnter: () => document.getElementById("final-cta").classList.add("visible"),
    onLeaveBack: () => document.getElementById("final-cta").classList.remove("visible"),
});

// Resize handler
window.addEventListener("resize", () => {
  render();
});

// Visibility check on load
window.addEventListener("load", render);
