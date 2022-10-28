const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const product = document.querySelector(".product");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.querySelector(".home").classList.remove("activate");
    document.querySelectorAll(".hover-product").forEach(n => n.classList.remove("active"));
    document.querySelector(".home").classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

product.addEventListener("click", () => {
    document.querySelectorAll(".hover-product").forEach(n => n.classList.toggle("active"));
    document.querySelector(".home").classList.toggle("activate");
})