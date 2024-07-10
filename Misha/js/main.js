"use strict";


let linkOne = document.getElementById("link_one")
let mainBlock = document.getElementById("main_block")

linkOne.addEventListener("click", event => {
	mainBlock.scrollIntoView({ behavior: "smooth", block: "start" })
})

let linkTwo = document.getElementById("link_two")
let whyBlock = document.getElementById("why_block")

linkTwo.addEventListener("click", event => {
	whyBlock.scrollIntoView({ behavior: "smooth", block: "start" })
})

let linkThree = document.getElementById("link_three")
let opportunitiesBlock = document.getElementById("opportunities_block")

linkThree.addEventListener("click", event => {
	opportunitiesBlock.scrollIntoView({ behavior: "smooth", block: "start" })
})

let linkFour = document.getElementById("link_four")
let mobileBlock = document.getElementById("mobile_block")

linkFour.addEventListener("click", event => {
	mobileBlock.scrollIntoView({ behavior: "smooth", block: "start" })
})

let linkFive = document.getElementById("link_five")
let loginBlock = document.getElementById("login_block")

linkFive.addEventListener("click", event => {
	loginBlock.scrollIntoView({ behavior: "smooth", block: "start" })
})

let linkSix = document.getElementById("link_six")
let bottomBlock = document.getElementById("bottom_block")

linkSix.addEventListener("click", event => {
	bottomBlock.scrollIntoView({ behavior: "smooth", block: "start" })
})


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("div[id$='_block']");
    const menuLinks = document.querySelectorAll(".main__a_right_flex");
    const menuLinks1 = document.querySelectorAll(".main__misha");


    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeLink = document.querySelector(`.main__misha[foo="${entry.target.id}"]`);
                menuLinks1.forEach(link => link.classList.remove("active"));
                activeLink.classList.add("active");
            }
        });
    }, options);

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeLink = document.querySelector(`.main__a_right_flex[foo="${entry.target.id}"]`);
                menuLinks.forEach(link => link.classList.remove("active"));
                activeLink.classList.add("active");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
    sections.forEach(section => {
        observer1.observe(section);
    });
});