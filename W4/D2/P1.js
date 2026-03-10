//innerText & textContent
//innerText: visible rendered text only
//textContent:all text nodes regardless of CSS
//innerHTML allows reading or writing HTML markup inside an element

const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");
//const reset = document.getElementById("resetBtn");

document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});

textContentBtn.addEventListener("click",function(){
    message.textContent = "Updated using textContent";
});
//reset.addEventListener("click",function(){
    //message.innerText = "Original Message";
//});

document.getElementById("resetBtn").addEventListener("click",function(){
    message.innerText = "Original Message";
});
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML = "<strong>Original</strong> Content";
});









