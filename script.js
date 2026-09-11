const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navbar nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("mobile-menu");
});