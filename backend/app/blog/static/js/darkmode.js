if (localStorage.getItem("darkMode") === "enabled") {
    document.documentElement.classList.add("dark-mode");
    // Optionally enable the dark mode stylesheet if needed.
    const darkModeStylesheet = document.getElementById("darkModeStylesheet");
    if (darkModeStylesheet) {
        darkModeStylesheet.disabled = false;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const element = document.documentElement;
    const darkModeStylesheet = document.getElementById("darkModeStylesheet");
    
    // Apply previously saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        element.classList.add("dark-mode");
        darkModeStylesheet.disabled = false;
    }
    
    // Handle toggle button click
    darkModeToggle.addEventListener("click", () => {
        console.log("Dark mode");
        const isDark = element.classList.toggle("dark-mode");
        // Enable or disable the dark stylesheet
        darkModeStylesheet.disabled = !isDark;

        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
        darkModeToggle.innerHTML = isDark ? "☀️ 日間模式" : "🌙 夜間模式";
    });
});