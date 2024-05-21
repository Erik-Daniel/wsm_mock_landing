let navbarMobileContainer = document.querySelector(".navbar_mobile_container");
let burgerMenu = document.querySelector(".burger_menu");
let navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
let navbarOpen = false;

burgerMenu.addEventListener("click", function() {
    if(!navbarOpen){
        body.style.overflow = "hidden";
        navbar.style.position = "absolute";
        navbarOpen = true;
    }
    else {
        body.style = "";
        navbar.style = "";
        navbarOpen = false;
    }
    navbarMobileContainer.classList.toggle("navbar_open");
    burgerMenu.classList.toggle("burger_menu_open");
})