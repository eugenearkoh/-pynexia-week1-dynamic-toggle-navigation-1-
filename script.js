// Select the navigation elements
const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const navLinks = document.querySelectorAll(".nav-link");

// Open or close the mobile navigation
function setMenuState(isOpen) {
    menuToggle.classList.toggle("is-open", isOpen);
    navigation.classList.toggle("is-open", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

// Toggle the menu when the hamburger button is clicked
menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

// Update the active link and close the mobile menu
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");

        setMenuState(false);
    });
});

// Close the menu when the user clicks outside the navigation
document.addEventListener("click", (event) => {
    const clickedInsideMenu = navigation.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        setMenuState(false);
    }
});

// Close the menu with the Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuState(false);
        menuToggle.focus();
    }
});

// Close the mobile menu when the screen becomes desktop-sized
window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
        setMenuState(false);
    }
});
