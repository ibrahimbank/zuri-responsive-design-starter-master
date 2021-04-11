const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav-bar");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
});
