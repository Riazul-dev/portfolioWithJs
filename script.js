// Scroll animation for About section
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = Math.floor(window.innerHeight / 1.3);

  if (sectionPos < screenPos) {
    aboutSection.classList.add("animate");
  } else {
    aboutSection.classList.remove("animate");
  }
});
