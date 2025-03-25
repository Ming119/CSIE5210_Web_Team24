document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const darkModeStylesheet = document.getElementById("darkModeStylesheet");
    document.documentElement.classList.toggle("dark-mode");
    
    // Apply previously saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeStylesheet.disabled = false;
    }
    
    // Handle toggle button click
    darkModeToggle.addEventListener("click", () => {
        console.log("Dark mode");
        const isDark = body.classList.toggle("dark-mode");
        // Enable or disable the dark stylesheet
        darkModeStylesheet.disabled = !isDark;

        // Save preference
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    });
});