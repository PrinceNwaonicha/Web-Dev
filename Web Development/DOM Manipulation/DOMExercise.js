// Todo List

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var lilst = document.querySelectorAll("li");
var i = 0

function inputLength() {
    return input.value.length;
}


function createDeleteButton(obj) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    obj.appendChild(btn);
    btn.onclick = function () {
        obj.remove();
        btn.remove();
    }
}


function createDoneButton(obj) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Done"));
    obj.appendChild(btn);
    btn.onclick = function () {
        obj.classList.toggle("done");
    }
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    lilst = document.querySelectorAll("li");
    length = lilst.length - 1;
    createDeleteButton(lilst[length]);
    createDoneButton(lilst[length]);
    input.value = "";
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    };

}


function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    };
}


function DeleteButton(obj) {
    obj.remove()
}


while (i < lilst.length) {
    createDeleteButton(lilst[i])
    createDoneButton(lilst[i])
    i++
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

