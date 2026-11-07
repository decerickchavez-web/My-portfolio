
/* =========================================
   DECERICK CHAVEZ - PORTFOLIO JAVASCRIPT
   ========================================= */


/* =========================================
   1. MOBILE NAVIGATION
   ========================================= */

// Select navigation elements
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-toggle");
menuButton.setAttribute("aria-label", "Open navigation menu");
menuButton.setAttribute("aria-expanded", "false");
menuButton.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;

// Add button to navigation
nav.appendChild(menuButton);

// Toggle mobile navigation
menuButton.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuButton.classList.toggle("open", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuButton.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

    });

});


/* =========================================
   2. ACTIVE NAVIGATION LINK
   ========================================= */

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navigationLinks.forEach(link => {

                    const isActive =
                        link.getAttribute("href") === `#${currentId}`;

                    link.classList.toggle("active", isActive);

                    if (isActive) {
                        link.setAttribute("aria-current", "location");
                    } else {
                        link.removeAttribute("aria-current");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================
   3. SMOOTH SCROLLING
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   4. SCROLL REVEAL ANIMATION
   ========================================= */

const revealElements = document.querySelectorAll(
    ".about, #skills, #projects, .education, #contact, .project-card, .skill"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal-element");

    revealObserver.observe(element);

});


/* =========================================
   5. CURSOR GLOW EFFECT
   ========================================= */

const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

// Only activate cursor glow on devices with a fine pointer
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

if (hasFinePointer) {

    document.addEventListener("mousemove", event => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

    document.addEventListener("mouseenter", () => {
        cursorGlow.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
        cursorGlow.style.opacity = "0";
    });

} else {

    cursorGlow.remove();

}


/* =========================================
   6. BACK TO TOP BUTTON
   ========================================= */

const backToTop = document.createElement("button");

backToTop.classList.add("back-to-top");

backToTop.innerHTML = "↑";

backToTop.setAttribute("aria-label", "Back to top");

backToTop.type = "button";

document.body.appendChild(backToTop);

// Show or hide button based on scroll position
window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}, { passive: true });

// Scroll to top
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   7. HERO TYPING EFFECT
   ========================================= */

const heroTitle = document.querySelector(".hero h2");

const originalTitle = heroTitle
    ? heroTitle.textContent.trim()
    : "";

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (heroTitle && !prefersReducedMotion) {

    heroTitle.textContent = "";

    let characterIndex = 0;

    function typeText() {

        if (characterIndex < originalTitle.length) {

            heroTitle.textContent += originalTitle.charAt(characterIndex);

            characterIndex++;

            setTimeout(typeText, 60);

        }

    }

    window.addEventListener("load", () => {

        setTimeout(typeText, 500);

    }, { once: true });

}


/* =========================================
   8. FOOTER YEAR
   ========================================= */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Decerick Chavez. Built with HTML, CSS & JavaScript.`;

}


/* =========================================
   9. CONSOLE MESSAGE
   ========================================= */

console.log(
    "%cWelcome to my portfolio!",
    "color: #ff9900; font-size: 20px; font-weight: bold;"
);

console.log(
    "%cDesigned and developed by Decerick Chavez.",
    "color: #ffffff; font-size: 12px;"
);
