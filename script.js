
// =====================================
// 1. DARK MODE TOGGLE
// =====================================

const themeButton = document.querySelector("[data-theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        themeButton.textContent = isDark ? "☀️" : "🌙";

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// Remember the user's selected theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    if (themeButton) {
        themeButton.textContent = "☀️";
    }
}


// =====================================
// 2. PROJECT FILTER
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.filter;

        // Update active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Filter project cards
        projectCards.forEach(function (card) {

            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// =====================================
// 3. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .stat-card, " +
    ".timeline-card, .experience-card, .project-card, " +
    ".cert-card, .skill-card, .award-card, " +
    ".interest-card, .contact-card, .cta-section, .contact-message"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {
    observer.observe(element);
});


// =====================================
// 4. CURRENT NAVIGATION PAGE
// =====================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(function (link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")) {

        link.classList.add("active");

    } else {
        link.classList.remove("active");
    }

});


// =====================================
// 5. SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
