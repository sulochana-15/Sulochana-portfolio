// ======================================
// PORTFOLIO JAVASCRIPT
// Developed by Venkata Sulochana Korrapati
// ======================================

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }

});

// ======================================
// CLOSE MENU AFTER CLICK
// ======================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================
// TYPING EFFECT
// ======================================

const typingText = document.getElementById("typing");

const roles = [

    "AI & ML Student",

    "Frontend Developer",

    "Python Developer",

    "Java Programmer",

    "FastAPI Learner",

    "Problem Solver",

    "Future Software Engineer"

];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!isDeleting){

        typingText.textContent = currentRole.substring(0, charIndex);

        charIndex++;

        if(charIndex > currentRole.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingText.textContent = currentRole.substring(0, charIndex);

        charIndex--;

        if(charIndex < 0){

            isDeleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();
// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

// ======================================
// STICKY HEADER SHADOW
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 12px 30px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow =
            "0 5px 15px rgba(0,0,0,0.08)";
    }

});

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealItems = document.querySelectorAll(
    ".card, .skill, .about-box, .contact-box"
);

revealItems.forEach(item => {
    item.classList.add("fade-up");
});

function revealOnScroll() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ======================================
// HERO IMAGE ANIMATION
// ======================================

const heroImage = document.querySelector(".circle");

if (heroImage) {

    heroImage.addEventListener("mouseenter", () => {

        heroImage.style.transform = "scale(1.05) rotate(2deg)";

    });

    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform = "scale(1) rotate(0deg)";

    });

}

// ======================================
// CARD HOVER EFFECT
// ======================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
