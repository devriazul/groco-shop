let menuBtn = document.querySelector(".fa-bars");
let mainNav = document.querySelector(".main-nav");
let headerArea = document.querySelector(".header-area");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  mainNav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menuBtn.classList.remove("fa-times");
  mainNav.classList.remove("active");
  if (scrollY > 90) {
    headerArea.classList.add("active");
  }
});
