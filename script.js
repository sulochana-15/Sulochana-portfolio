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
// ======================================
// BACK TO TOP BUTTON
// ======================================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================================
// SCROLL PROGRESS BAR
// ======================================

const progressBar = document.createElement("div");

progressBar.className = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ======================================
// DARK MODE
// ======================================

const darkBtn = document.createElement("button");

darkBtn.className = "dark-mode-btn";

darkBtn.innerHTML = '<i class="fas fa-moon"></i>';

document.body.appendChild(darkBtn);

// Load saved theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    darkBtn.innerHTML =
    '<i class="fas fa-sun"></i>';

}

// Toggle theme

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        darkBtn.innerHTML =
        '<i class="fas fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        darkBtn.innerHTML =
        '<i class="fas fa-moon"></i>';

    }

});

// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size/2) + "px";

        ripple.style.top = (e.clientY - rect.top - size/2) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("%cWelcome to Sulochana's Portfolio 🚀",
"color:#2563eb;font-size:18px;font-weight:bold;");

console.log("%cDesigned with ❤️ using HTML, CSS & JavaScript",
"color:#16a34a;font-size:14px;");
// ======================================
// PAGE LOADING ANIMATION
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    document.body.style.transition = "opacity .6s ease";

});

// ======================================
// AUTO UPDATE FOOTER YEAR
// ======================================

const yearElement = document.querySelector(".copyright");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML = `
        © ${currentYear} Venkata Sulochana Korrapati.
        <br>
        Designed with ❤️ using HTML, CSS & JavaScript.
    `;

}

// ======================================
// HERO SECTION FADE-IN
// ======================================

const hero = document.querySelector(".hero");

if(hero){

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    window.addEventListener("load", () => {

        setTimeout(() => {

            hero.style.transition = "all .8s ease";

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";

        },300);

    });

}

// ======================================
// KEYBOARD SHORTCUTS
// ======================================

document.addEventListener("keydown",(e)=>{

    // Home Key → Top

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    // End Key → Bottom

    if(e.key==="End"){

        window.scrollTo({

            top:document.body.scrollHeight,

            behavior:"smooth"

        });

    }

});

// ======================================
// PERFORMANCE OPTIMIZATION
// ======================================

// Lazy loading for all images

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("loading","lazy");

});

// ======================================
// IMAGE FALLBACK
// ======================================

document.querySelectorAll("img").forEach(img=>{

    img.onerror=function(){

        this.src="https://via.placeholder.com/400x400?text=Profile";

    };

});

// ======================================
// WELCOME MESSAGE
// ======================================

setTimeout(()=>{

    console.log(
        "%c👋 Welcome Recruiter!",
        "color:#2563eb;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cPortfolio Developed by Venkata Sulochana Korrapati",
        "color:#16a34a;font-size:15px;"
    );

},1000);

// ======================================
// PORTFOLIO READY
// ======================================

console.log(
"%c🚀 Portfolio Loaded Successfully!",
"color:#2563eb;font-size:18px;font-weight:bold;"
);
