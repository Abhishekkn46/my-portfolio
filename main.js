document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const text = ["a Developer", "an AI Enthusiast", "a DevOps Engineer", "a Problem Solver"];
    let index = 0, charIndex = 0;
    const typingText = document.querySelector(".typing-text");

    function type() {
        if (charIndex === 0) typingText.innerHTML = "";
        if (charIndex < text[index].length) {
            typingText.innerHTML += text[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.innerHTML = text[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            index = (index + 1) % text.length;
            setTimeout(type, 500);
        }
    }

    type();

    // Smooth Scrolling Effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in Animation for Sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    

    // Hamburger Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});
