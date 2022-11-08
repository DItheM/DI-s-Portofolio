var secondaryCircle = document.querySelector(".secondary-circle");
var profile = document.querySelector(".profile");
var primaryCircle = document.querySelector("#primary-circle");
console.log(primaryCircle);

function pageLoad() {
    profile.classList.add("disabled");
    secondaryCircle.classList.add("page-load-secondary-circle");
    content.style.animation = "text-end 1000ms forwards";
    loader.style.animation = "de-vanish 1000ms forwards";
    // primaryCircle.style.animation = "hover-primary-circle 1000ms forwards";
}

function connectLink() {
    window.location = "./connect.html";
}
function homeLink() {
    window.location = "./index.html";
}
function projectsLink() {
    window.location = "./projects.html";
}
function skillsLink() {
    window.location = "./skills.html";
}
function aboutLink() {
    window.location = "./about.html";
}