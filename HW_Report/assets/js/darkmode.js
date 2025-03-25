document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.innerHTML = "☀️ 日間模式";
    }

    // Toggle dark mode when button is clicked
    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.innerHTML = "🌙 夜間模式";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.innerHTML = "☀️ 日間模式";
        }
    });
});