document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".header nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        this.reset();
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});