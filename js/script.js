let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    navigation: {
        nextE1: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});