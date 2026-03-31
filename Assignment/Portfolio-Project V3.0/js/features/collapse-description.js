document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.previousElementSibling;
    text.classList.toggle("expanded");
    btn.textContent = text.classList.contains("expanded")
      ? "View Less" : "View More";
  });
});