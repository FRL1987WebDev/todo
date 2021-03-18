const btn = document.getElementById("addTo");
const list = document.getElementById("toDoContainer");
const input = document.getElementById("inputField");

btn.addEventListener("click", function () {
    let paragraph = document.createElement("p");
    list.appendChild(paragraph);
    paragraph.innerText = input.value;  
    input.value = "";
})