let menu = document.querySelector('.menu-icon');
let sliderMenu = document.querySelector('.slider-menu');

function toggleMenu() {
    const isOpen = sliderMenu.classList.contains("active");

    sliderMenu.classList.toggle("active");
    menu.setAttribute("aria-expanded", !isOpen);
}

menu.addEventListener("click", toggleMenu);