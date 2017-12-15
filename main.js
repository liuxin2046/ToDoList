var button = document.querySelector("button");
var ul = document.querySelector("ul");
var input = document.querySelector("input");
button.addEventListener("click",addItem);
function addItem(){
    var event = input.value;
    input.value = "";
    var list = document.createElement("li");
    var span = document.createElement("span");
    var listBtn = document.createElement("button");
   
    span.textContent = event;
    listBtn.textContent = "删除";
    list.appendChild(span);
    list.appendChild(listBtn);
    ul.appendChild(list);
     listBtn.addEventListener("click",function(){
        ul.removeChild(list);
    });
    
    input.focus();
}
