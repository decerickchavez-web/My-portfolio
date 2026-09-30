// =========================================================
// PORTFOLIO JAVASCRIPT

// 1. SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".about, .skills-container, .projects-container, .education, #contact"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal-element");

    revealObserver.observe(element);

});


// 2. ACTIVE NAVIGATION

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


// 3. SMOOTH SCROLL

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId.startsWith("#")) {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// 4. CURSOR GLOW

const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = `${event.clientX}px`;

    cursorGlow.style.top = `${event.clientY}px`;

});


// Hide cursor glow when mouse leaves the page

document.addEventListener("mouseleave", () => {

    cursorGlow.style.opacity = "0";

});


document.addEventListener("mouseenter", () => {

    cursorGlow.style.opacity = "1";

});


// 5. BACK TO TOP BUTTON

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.classList.add("back-to-top");

backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 6. TYPING EFFECT

const typingText = document.querySelector(".hero h2");

if (typingText) {

    const originalText = typingText.textContent;

    typingText.textContent = "";

    let index = 0;


    function typeText() {

        if (index < originalText.length) {

            typingText.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeText, 45);

        }

    }


    window.addEventListener("load", () => {

        setTimeout(typeText, 500);

    });

}


// 7. CONSOLE MESSAGE

console.log(
    "Welcome to Decerick's Portfolio 🚀"
);

console.log(
    "Built with HTML, CSS, and JavaScript."
);

