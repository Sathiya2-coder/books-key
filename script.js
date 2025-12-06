var popupoverlay=document.querySelector(".popup-overlay")
var popupadder=document.querySelector(".popup-adder")
var addbuttonid=document.getElementById("add-button-id")
addbuttonid.addEventListener("click",function(){popupadder.style.display="block";popupoverlay.style.display="block";})
var cancel=document.getElementById("cancel-button")
cancel.addEventListener("click",function(event){event.preventDefault();popupadder.style.display="none";popupoverlay.style.display="none";})
var add=document.getElementById("add-button")
var container = document.querySelector(".container")
var bookcontainer=document.querySelector(".book-container")
var bookname=document.getElementById("book-name")
var bookauthor=document.getElementById("book-author")
var textarea=document.getElementById("book-discription-input")
add.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML+=`<h1>${bookname.value}</h1><h3>${bookauthor.value}</h3><br><p>${textarea.value}</p><button onclick="del(event)">Delete</button>`;
    container.append(div);
    popupadder.style.display="none";
    popupoverlay.style.display="none";
})
function del(event){
event.target.parentElement.remove();
}