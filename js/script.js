const hamburger = document.querySelector(".humburger");
const navmenu = document.querySelector(".nav-list");
const body = document.querySelector(".content-section");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
  body.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    body.classList.remove("active");
  })
);
