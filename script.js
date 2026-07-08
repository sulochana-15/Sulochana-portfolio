// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-times");
    } else {
        menuIcon.classList.replace("fa-times", "fa-bars");
    }
});

// Close Menu after Clicking Link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuIcon.classList.replace("fa-times", "fa-bars");
    });
});

// ===============================
// Typing Animation
// ===============================

const words = [
    "Computer Engineering Student",
    "Frontend Developer",
    "Java Programmer",
    "Python Developer",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.innerHTML =
            currentWord.substring(0, charIndex) + "<span>|</span>";

        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.innerHTML =
            currentWord.substring(0, charIndex) + "<span>|</span>";

        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".card, .skill, .about-box, .contact-box"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===============================
// Hero Image Animation
// ===============================

const profile = document.querySelector(".circle");

window.addEventListener("load", () => {

    profile.style.opacity = "0";
    profile.style.transform = "translateY(40px)";

    setTimeout(() => {

        profile.style.transition = "all 1s ease";
        profile.style.opacity = "1";
        profile.style.transform = "translateY(0)";

    }, 300);

});

// ===============================
// Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});
