//Declaring variables and constants
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const menu = document.getElementById("menu");
const contentOverlay = document.getElementById("content-overlay");

//Functions and Event Listeners
function openMenu() {
 menu.style.setProperty("left", '0px');
 contentOverlay.style.setProperty("display", "flex");
}
function closeMenu() {
 menu.style.setProperty("left", '-200px');
 contentOverlay.style.setProperty("display", "none");
}
contentOverlay.onclick = () => {
 closeMenu();
}