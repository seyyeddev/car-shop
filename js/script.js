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


/////////////////////
let cards = document.querySelectorAll(".card");
let btns = document.querySelectorAll(".btns__item");


btns[0].addEventListener("click", () => {
    cards.forEach((card) => {
        if (card.classList.contains("d-none")) {
            card.classList.remove("d-none");
        }
    })
})


btns[1].addEventListener("click", (e) => {

    cards.forEach((card) => {

        if (card.classList.contains("d-none")) {
            card.classList.remove("d-none")
        }

        if (card.getAttribute("model") !== btns[1].innerHTML) {
           card.classList.add("d-none");
        }

    })
})

btns[2].addEventListener("click", (e) => {

    cards.forEach((card) => {

        if (card.classList.contains("d-none")) {
            card.classList.remove("d-none")
        }
        
        if (card.getAttribute("model") !== btns[2].innerHTML) {
           card.classList.add("d-none");
        }
        
    })
})