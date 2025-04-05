document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const images = document.querySelectorAll(".imagen img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  images.forEach((image) => {
    observer.observe(image);
  });

  let lastScrollY = window.scrollY;
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.style.top = "-110px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollY = window.scrollY;
  });
});
