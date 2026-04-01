function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) {
        console.log("Button not found ❌");
        return;
    }

    console.log("BackToTop working ✅");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            btn.classList.remove("hidden");
        } else {
            btn.classList.add("hidden");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}