document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    let isDarkMode = true;

    darkModeToggle.addEventListener("click", function () {
        if (isDarkMode) {
            document.body.classList.remove("dark-mode");
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            darkModeToggle.textContent = "☀️";
            darkModeToggle.style.background = "#fbc02d";
            darkModeToggle.style.boxShadow = "0 0 10px #fbc02d";
        } else {
            document.body.classList.add("dark-mode");
            document.body.style.backgroundColor = "#090014";
            document.body.style.color = "#e0e0ff";
            darkModeToggle.textContent = "🌙";
            darkModeToggle.style.background = "#5d3395";
            darkModeToggle.style.boxShadow = "0 0 10px #8a2be2";
        }
        isDarkMode = !isDarkMode;
    });




    document.addEventListener("mousemove", function (e) {
        const star = document.createElement("div");
        star.classList.add("star");
        document.body.appendChild(star);
    
        let x = e.clientX;
        let y = e.clientY;
    
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
    
        setTimeout(() => {
            star.remove();
        }, 500); // Remove after 0.5s
    });
});
