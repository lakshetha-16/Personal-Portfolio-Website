```javascript
// Personal Portfolio Website
// JavaScript Functionality


// Wait until the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // Mobile Navigation
    // ==========================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        const navigationLinks =
            navLinks.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });

        });
    }


    // ==========================================
    // Contact Form
    // ==========================================

    const contactForm =
        document.getElementById("contactForm");

    const formStatus =
        document.getElementById("formStatus");

    if (contactForm && formStatus) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const messageInput =
                document.getElementById("message");


            if (!nameInput || !emailInput || !messageInput) {
                return;
            }


            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();


            // Name validation
            if (name === "") {

                formStatus.textContent =
                    "Please enter your name.";

                return;
            }


            // Email validation
            if (email === "") {

                formStatus.textContent =
                    "Please enter your email address.";

                return;
            }


            // Message validation
            if (message === "") {

                formStatus.textContent =
                    "Please enter your message.";

                return;
            }


            // Email format validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                formStatus.textContent =
                    "Please enter a valid email address.";

                return;
            }


            // Successful submission
            formStatus.textContent =
                "Thank you, " + name +
                "! Your message has been received.";


            // Clear the form
            contactForm.reset();

        });
    }


    // ==========================================
    // Scroll Reveal Effect
    // ==========================================

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-text, " +
            ".highlight-card, " +
            ".skill-card, " +
            ".project-card, " +
            ".timeline-item, " +
            ".contact-container"
        );


    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;


        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (elementTop < windowHeight - 80) {

                element.classList.add("show");

            }

        });

    }


    // Add basic reveal styles
    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

    });


    // Run once when page loads
    revealOnScroll();


    // Run when scrolling
    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    // ==========================================
    // Navbar Background on Scroll
    // ==========================================

    const header =
        document.querySelector(".header");


    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                header.style.background =
                    "rgba(7, 17, 31, 0.98)";

            } else {

                header.style.background =
                    "rgba(7, 17, 31, 0.92)";

            }

        });

    }


    // ==========================================
    // Current Year in Footer
    // ==========================================

    const footerParagraphs =
        document.querySelectorAll(".footer p");


    if (footerParagraphs.length > 0) {

        const currentYear =
            new Date().getFullYear();

        footerParagraphs[0].textContent =
            "© " + currentYear +
            " Lakshetha S. All rights reserved.";

    }


    // ==========================================
    // Console Confirmation
    // ==========================================

    console.log(
        "Personal Portfolio loaded successfully."
    );

});
```