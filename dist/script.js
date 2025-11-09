const addButton = document.getElementById("addButton");
const textBox = document.getElementById("addTask");

// Adds a new task from the textbox into the list
addButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    addBtnClick();
});

function addBtnClick(){
    let task = document.getElementById("addTask").value;
    if (task != ""){
        addTask(task);
        document.getElementById("addTask").value = "";
        textBox.focus();
    }
}

function addTask(NEWTASK){
    let list = document.createElement("li");
    list.innerHTML = "<span class='task-text'>" + NEWTASK  + "</span><button class='done-btn'>&#10006;</button>";
    document.querySelector("ol").appendChild(list);
    let doneButtons = document.querySelectorAll(".done-btn");
    doneButtons[doneButtons.length-1].addEventListener("click", removeTask);
}

// Makes the Enter Key function the same as the Add Button
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded(){
    textBox.addEventListener("keyup", keyupHandler);
}

function keyupHandler(event){
    if (event.key == "Enter") {
        addBtnClick();
    }
}

// Removes a task when the X is pressed
function removeTask(event){
    let Xbutton = event.target.parentNode;
    Xbutton.parentNode.removeChild(Xbutton);
}