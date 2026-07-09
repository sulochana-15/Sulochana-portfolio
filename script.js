// ======================================
// PORTFOLIO JAVASCRIPT
// Developed by Venkata Sulochana
// ======================================

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");

    }else{

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    }

});

// ================================
// CLOSE MENU AFTER CLICK
// ================================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ================================
// TYPING EFFECT
// ================================

const words=[

    "Computer Engineering Student",

    "Frontend Developer",

    "Python Developer",

    "Java Programmer",

    "Future Software Engineer"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typingEffect(){

    const currentWord=words[wordIndex];

    if(!deleting){

        typing.textContent=currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typingEffect,1500);

            return;

        }

    }else{

        typing.textContent=currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex<0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typingEffect,deleting?50:100);

}

typingEffect();
// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

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

// ======================================
// HEADER SHADOW
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.08)";

    }

});

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealElements = document.querySelectorAll(

    ".card, .project-card, .achievement-card, .skill, .about-box, .contact-box"

);

function revealAnimation() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

window.addEventListener("load", revealAnimation);

// ======================================
// FADE-UP EFFECT
// ======================================

revealElements.forEach(element => {

    element.classList.add("fade-up");

});

// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});
// ======================================
// BACK TO TOP BUTTON
// ======================================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.opacity = "1";
        topButton.style.visibility = "visible";

    } else {

        topButton.style.opacity = "0";
        topButton.style.visibility = "hidden";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ======================================
// SCROLL PROGRESS BAR
// ======================================

const progressBar = document.createElement("div");

progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight -

                         document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ======================================
// PROFILE IMAGE HOVER
// ======================================

const profileImage = document.querySelector(".profile-img");

if(profileImage){

    profileImage.addEventListener("mouseenter",()=>{

        profileImage.style.transform="scale(1.08)";

        profileImage.style.transition=".4s";

    });

    profileImage.addEventListener("mouseleave",()=>{

        profileImage.style.transform="scale(1)";

    });

}

// ======================================
// CARD HOVER EFFECT
// ======================================

const cards=document.querySelectorAll(".card,.project-card,.achievement-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// ======================================
// PRELOADER (OPTIONAL)
// ======================================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("%cWelcome to Sulochana's Portfolio 🚀",
"color:#2563eb;font-size:18px;font-weight:bold;");

console.log("%cDesigned with HTML, CSS & JavaScript",
"color:#16a34a;font-size:14px;");
