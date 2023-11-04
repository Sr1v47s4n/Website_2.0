// Dark / light mode
const btn = document.getElementById("modeToggle");
const themeIcons = document.getElementById("color-icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
    console.log("dark mode");
} else {
    setLightMode(); // Set the initial theme to light mode
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


}

function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");


}

