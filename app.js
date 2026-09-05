/* =========================================
   TTM.001 — VERSION 001
   APP.JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       MOBILE MENU
    ============================== */

    const menuButton = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");
    const nav = document.querySelector(".navbar nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("mobile-menu");

            if (nav.classList.contains("mobile-menu")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }

        });


        // Close menu after clicking a link

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("mobile-menu");

                menuButton.textContent = "☰";

            });

        });

    }


    /* ==============================
       HEADER ON SCROLL
    ============================== */

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.scrollY;

        if (!navbar) return;

        if (currentScroll > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Hide navbar when scrolling down
        if (currentScroll > lastScroll && currentScroll > 150) {
            navbar.classList.add("hide-navbar");
        } else {
            navbar.classList.remove("hide-navbar");
        }

        lastScroll = currentScroll;

    });


    /* ==============================
       SCROLL REVEAL
    ============================== */

    const revealElements = document.querySelectorAll(
        ".story, .shop, .product, .manifesto, .archive"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* ==============================
       PRODUCT INTERACTION
    ============================== */

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        product.addEventListener("click", () => {

            const productName =
                product.querySelector("h3")?.textContent ||
                "TTM