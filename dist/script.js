const addButton = document.getElementById("addButton");
const textBox = document.getElementById("addTask");

addButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    addBtnClick();
});

window.addEventListener("DOMContentLoaded", domLoaded);


function addBtnClick(){
    let task = document.getElementById("addTask").value;
    addTask(task);
    document.getElementById("addTask").value = "";
    textBox.focus()
    
}

function domLoaded(){
    textBox.addEventListener("keyup", keyupHandler);
}

function addTask(NEWTASK){
    let list = document.createElement("li");
    list.innerHTML = "<span class='task-text'>" + NEWTASK  + "</span><button class='done-btn'>&#10006;</button>";
    document.querySelector("ol").appendChild(list);
}

function keyupHandler(event){
    if (event.key == "Enter") {
        addBtnClick();
    }
}