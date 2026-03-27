document.addEventListener("DOMContentLoaded",function(){
    //Render skills
    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
    projectSearch();
    developerStats();
    translations();
});
alert("Welcome to sinchana")
const btn = document.getElementById("visitBtn");
const display = document.getElementById("visitorCount");


let count = localStorage.getItem("visitorCount");

if (count === null) { 
  count = 0;
}
 
 
display.textContent = count;


btn.addEventListener("click", function () {
  count++;
  localStorage.setItem("visitorCount", count);
  display.textContent = count;
});

// top to bottom 
const btn1 = document.getElementById("backToTop");

window.onscroll = () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn1.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
nameInput.addEventListener("keypress", (e) => {
    if (!/[a-zA-Z\s]/.test(e.key)) {
        e.preventDefault();
    }
});