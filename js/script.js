let preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hidepreloader");
})


//////////////////////

let navbtn = document.querySelector(".nav__responsive");
let navlist = document.querySelector(".nav__list");
let navmedia = document.querySelector(".nav__media")


navbtn.addEventListener("click", () => {
    if (navbtn.classList.contains("fa-bars")) {

        navlist.style.left = "0";
        navmedia.style.left = "0";
        navbtn.classList = "nav__responsive fas fa-times";

    } else if (navbtn.classList.contains("fa-times")) {

        navlist.style.left = "-170px";
        navmedia.style.left = "-170px";
        navbtn.classList = "nav__responsive fas fa-bars";
        
    }
})