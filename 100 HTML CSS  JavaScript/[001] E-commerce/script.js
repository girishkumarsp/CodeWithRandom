const hamburger = document.querySelector("#hamburger");
const cancel = document.querySelector("#cancel");
const MobileMenu = document.querySelector(".MobileMenu");
hamburger.addEventListener("click", () => {
  MobileMenu.style.display = "block";
  cancel.style.display = "block";
  
});

cancel.addEventListener("click", () => {
  MobileMenu.style.display = "none";
  cancel.style.display = "none";
});
