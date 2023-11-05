document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("modeToggle");
    const themeIcons = document.getElementById("color-icon");

    // Check if the user's color mode preference is stored in local storage
    const userColorModePreference = localStorage.getItem("colorMode");

    // Check the user's browser color mode (light or dark)
    const browserColorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    // Determine the initial theme based on user preference or browser color mode
    const initialTheme = userColorModePreference || browserColorMode;

    if (initialTheme === "dark") {
        setDarkMode();
        console.log("dark mode");
    } else {
        setLightMode();
        console.log("light mode");
    }

    btn.addEventListener("click", function () {
        setTheme();
    });

    function setTheme() {
        let currentTheme = document.body.getAttribute("theme");
        if (currentTheme === "dark") {
            setLightMode();
        } else {
            setDarkMode();
        }
    }

    function setDarkMode() {
        document.body.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("colorMode", "dark"); // Store the user's color mode preference
    }

    function setLightMode() {
        document.body.removeAttribute("theme");
        localStorage.setItem("theme", "light");
        localStorage.setItem("colorMode", "light"); // Store the user's color mode preference
    }
})