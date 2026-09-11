document.addEventListener("DOMContentLoaded", () => {
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navbar nav");

if (menuButton && navigation) {
menuButton.addEventListener("click", () => {
navigation.classList.toggle("mobile-menu");
});
}
});