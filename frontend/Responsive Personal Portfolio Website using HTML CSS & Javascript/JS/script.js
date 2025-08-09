// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// scroll sections
window.onscroll = () => {
    //sticky header
    let header = document.querySelector("header");

    // header.classList.toggle('sticky', window.scrollY > (window.innerHeight = 2300)); //Selected one section to appear this function class
    header.classList.toggle('sticky', window.scrollY > 150);

//Mudar a class 'active' em navbar-links: home
let sections = document.querySelectorAll("section");
let navbarLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            // active navbar links
            navbarLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector(`header nav a[href*= ${id}]`).classList.add("active");
            });
            // active sections for animation on scroll
            sec.classList.add("show-animate");
        }
        //if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove("show.animate");
        }
    });

    // remove toggle icon and navbar when click navbar links (scroll moving)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    //animation footer on scroll
    let footer = document.querySelector("footer");

    footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

//mudar a cor de fundo 
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
const body = document.querySelector("body");

body.style.transition = "1s ease";

sunIcon.onclick = () => {
    if(sunIcon.classList.contains("bx-sun")) {

        body.classList.add("mudarCorFundo");

        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    }
};
moonIcon.onclick = () => {
    if(sunIcon.classList.contains("bx-moon")) {

        body.classList.remove("mudarCorFundo");

        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    } else {

        body.classList.remove("mudarCorFundo");

        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    }
};