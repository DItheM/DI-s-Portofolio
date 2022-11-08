//when window is fully loaded, loader will be vanished
var loader = document.querySelector(".loader");
var loading_circle = document.querySelector(".loading-circle");
var blocks = document.querySelector(".loading-blocks");
var content = document.querySelector(".intro");

window.addEventListener("load", doEnd);
window.addEventListener("load", doVanish);
window.addEventListener("load", doContentAnimation);
blocks.addEventListener("animationend", reanimate_blocks);


function reanimate_blocks() {
    blocks.style.animation = "loading-blocks-end 1s 2000ms infinite";

}
function doVanish() {
    setTimeout(vanish, 2500);
}
function doEnd() {
    setTimeout(end, 2000);
}
function doContentAnimation() {
    setTimeout(contentAnimation, 2500);
}


function contentAnimation() {
    content.style.animation = "text-start 2s forwards";
}
function vanish() {
    loader.classList.add("disappear");
    blocks.style.animation = "loading-blocks-end 1s 2000ms infinite paused";
}
function end() {
    loading_circle.classList.add("end");
}
