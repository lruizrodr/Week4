let displaycount = document.getElementById("displaycount");
let counter = 0;

function add(){
    displaycount.innerText = ++counter;
}

function minus(){
    displaycount.innerText = --counter;
}

function addItem(){
    let input = document.getElementById("item-value").value;
    document.getElementById("item-value").value = "Add a fruit or something...";

    let li = document.createElement("li");
    li.innerText = input;

    let ul = document.getElementById("item-list");
    ul.appendChild(li);
    
    
}