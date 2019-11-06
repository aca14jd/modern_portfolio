const swup = new Swup();

// Menu Bar

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleMenu);
navItems.forEach(item => item.addEventListener("click", toggleMenu));

function toggleMenu() {
    if (mediaSm.matches) {
        menuBtn.classList.toggle("close");
        menu.classList.toggle("show");
        menuNav.classList.toggle("show");
        navItems.forEach(item => item.classList.toggle("show"));
    } else {
        return false;
    }
}

// Media Queries

var mediaSm = window.matchMedia("(min-width: 500px) and (max-width: 768px)");
var mediaLg = window.matchMedia("(min-width: 769px)");

function removeHamburger() {
    if (mediaLg.matches) {
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));
        menuBtn.classList.toggle("hide");
        console.log("test1");
    }
}

function addHamburger() {
    if (mediaSm.matches) {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
        menuBtn.classList.toggle("hide");
        console.log("test2");
    }
}

removeHamburger(); // Call listener function at run time
mediaSm.addListener(addHamburger);
mediaLg.addListener(removeHamburger);