
// navbar section
const menuToggle = document.querySelector(".menuToggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", function(){
    navList.classList.toggle("show-links");
})
