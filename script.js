let menu = document.querySelector('.menu-icon');
let sliderMenu = document.querySelector('.slider-menu');

function toggleMenu() {
    sliderMenu.classList.toggle("active");
    const isOpen = sliderMenu.classList.contains("active");
    menu.setAttribute("aria-expanded", isOpen);
}


function closeMenu() {
    sliderMenu.classList.remove("active");
     menu.setAttribute("aria-expanded", "false");
}

// close when esc key is pressed
document.addEventListener("keydown" ,function(event){
 if(event.key === "Escape"){
    closeMenu();
 }
});

// close when clicking outside
document.addEventListener("click", function(event) {
    const isClickInsideMenu = sliderMenu.contains(event.target);
    const isClickOnButton = menu.contains(event.target);

    if(!isClickInsideMenu && !isClickOnButton) {
       closeMenu();
    }
});

menu.addEventListener("click", toggleMenu);