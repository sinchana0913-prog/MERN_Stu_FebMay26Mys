//Createlement() & appendChild()

const list = document.getElementById("list");
let counter = 1;

document.getElementById("addBtn").addEventListener("click",function(){
    const li = document.createElement("li");
    errmessage.textContent = "";
    li.textContent = "Item" + counter++;
    list.appendChild(li);
});

document.getElementById("rmBtn").addEventListener("click",function(){
    if(list.lastElementChild){
     list.removeChild(list.lastElementChild);   
    }
    else{
    errmessage.textContent = "no items to remove";
    }
    
});