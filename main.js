// for 100% height
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

// Typed.js Animation
var typed = new Typed(".skills", {
  strings: ["Web Designer.", "Graphic Designer.", "Web Developer."],
  typeSpeed: 50,
  loop: true,
});
