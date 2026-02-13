let menu = document.querySelector('.menu-icon');
let sliderMenu = document.querySelector('.slider-menu');
menu.addEventListener('click',() => {
    sliderMenu.classList.toggle('active');
});