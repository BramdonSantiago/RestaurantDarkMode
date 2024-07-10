/*OTRAS MANERAS DE MOSTRAR MENU*/
// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId);
//     const nav = document.getElementById(navId);

//     if (toggle && nav) {
//         toggle.addEventListener("click", function() {
//             nav.classList.toggle("show-menu");
//         })
//     }    
// }
// showMenu("nav-toggle", "nav-menu");

// const toggle = document.getElementById('nav-toggle');
// const nav = document.getElementById('nav-menu');

// if (toggle && nav) {
//     toggle.addEventListener("click", function() {
//         nav.classList.toggle("show-menu");
//     })
// }

/*MOSTRAR MENU*/
const showMenu = function (toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", function() {
            nav.classList.toggle("show-menu");
        })    
    }    
    
}    
showMenu("nav-toggle", "nav-menu");

/*MOSTRAR SCROLL TOP*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY >= 600) {
        scrollTop.classList.add("scroll-top");
    } else {
        scrollTop.classList.remove("scroll-top");
    }
}
window.addEventListener("scroll", scrollTop);

/*MODO NOCTURNO*/
const themeButton = document.getElementById('theme-button');

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark": "light";
const getCurrentIcon = () => themeButton.classList.contains('bx-sun') ? "bx-moon": "bx-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']("dark-theme");
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove']("bx-sun");
}

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    themeButton.classList.toggle("bx-sun");
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})

/*SCROLL REVEAL ANIMATION*/
var slideDown = {
    distance: '20%',
    origin: 'top',
    duration: 2000,
    reset: true,
};
ScrollReveal().reveal('.home__data, .home__img, .about__data, about__img, .services__content, .menu__content, .app__data, .app__img, contact__data, .contact__button, .footer__content', slideDown);