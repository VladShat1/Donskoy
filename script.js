document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

if (toggle) {
    toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀";

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        toggle.textContent = isDark ? "🌙" : "☀";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Сообщение отправлено!");
        form.reset();
    });
}