document.addEventListener("DOMContentLoaded",function(){
    //Render skills
    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
    projectSearch();
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