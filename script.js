// Navbar section
// Theme toggle functionality for light and dark mode
const themeToggleBtn = document.querySelector(".mode");
const themeToggleBtn_icon = document.querySelector("#icon");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light_mode")) {
    body.classList.remove("light_mode");
    themeToggleBtn_icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggleBtn_icon.innerHTML = '<i class="fa-solid fa-moon"></i>';
    body.classList.add("light_mode");
  }
});

// Mobile menu functionality
const menuBar = document.querySelector(".menuBar");
const menuList = document.querySelector(".menuList");

menuBar.addEventListener("click", () => {
  if (menuList.classList.contains("mobileMenu")) {
    menuList.classList.remove("mobileMenu");
    menuBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    menuList.classList.add("mobileMenu");
    menuBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }

  menuList.addEventListener("click", () => {
    menuList.classList.remove("mobileMenu");
    menuBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Scroll animation for Hero section
const hero = document.querySelector(".hero");
const primary_btn = document.querySelector(".primary-btn");
const secondary_btn = document.querySelector(".secondary-btn");

primary_btn.style.marginRight = "1rem";
primary_btn.style.opacity = 1;
secondary_btn.style.opacity = 1;

window.addEventListener("scroll", () => {
  const sectionPos = hero.getBoundingClientRect().bottom;
  const screenPos = Math.floor(window.innerHeight / 1.5);
  const screenWidth = Math.floor(window.innerWidth);

  if (sectionPos > screenPos) {
    primary_btn.style.marginRight = "1rem";
    primary_btn.style.opacity = 1;
    secondary_btn.style.opacity = 1;
  } else {
    if (screenWidth > 768) {
      primary_btn.style.marginRight = "10rem";
      primary_btn.style.opacity = 0;
      secondary_btn.style.opacity = 0;
    }
  }
});

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

// Work section
// Filter projects functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Active class to clicked button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
