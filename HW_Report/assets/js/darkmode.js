document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const darkModeStylesheet = document.getElementById("darkModeStylesheet");
    
    if (darkModeToggle && darkModeStylesheet) {
        // Apply previously saved dark mode preference
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeStylesheet.disabled = false;
            darkModeToggle.innerHTML = "☀️ 日間模式";
        }

        // Handle toggle button click
        darkModeToggle.addEventListener("click", () => {
            const isDark = body.classList.toggle("dark-mode");
            darkModeStylesheet.disabled = !isDark;
            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
            darkModeToggle.innerHTML = isDark ? "☀️ 日間模式" : "🌙 夜間模式";
        });
    }
});