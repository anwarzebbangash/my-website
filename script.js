// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animation + Active Link Highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

function reveal() {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            sec.classList.add("active");
            navItems.forEach(link => link.classList.remove("active"));
            document.querySelector(`a[href*=${id}]`).classList.add("active");
        }
        else {
            sec.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", reveal);

// Sticky Navbar Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
