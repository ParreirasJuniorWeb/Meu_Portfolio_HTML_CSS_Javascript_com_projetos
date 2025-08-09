const header = document.querySelector('header');

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0); //Toda vez que o scroll bar for movimentado no website - a classe "sticky" será adicionada à tag HTML semântica header!
});

//Modal navBar
let menu = document.querySelector("#menu-icon");
let nav_menu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_menu.classList.toggle('open');
}