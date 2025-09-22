// console.log(document);

// console.log(document.title);
// console.log(document.URL);
// console.log(document.body);

// console.log(document.getElementById("main-title").innerText);
// document.getElementById("main-title").innerText = "Hello using DOM!";
// document.getElementById("main-title").innerHTML = "<i>Hello using DOM!</i>";

let maintitle = document.getElementById("main-title");
console.log(maintitle.innerText);

maintitle.innerText = "Hello using DOM!";
maintitle.innerHTML = "<i>Hello using DOM!</i>";

console.log(document.getElementsByClassName("card"));
let cards = document.getElementsByClassName("card");
console.log(cards[0]);
console.log(cards[1]);

for(let i =0; i < cards.length; i++){
    cards[i].innerText = "Card " + (i+1);
}

// let listItems = document.getElementsByTagName("li");
// for(let i =0; i < listItems.length; i++){
//     listItems[i].innerText = "Item " + (i+1);
//     listItems[i].style.color= "red";
//     listItems[i].style.background= "yellow";
//     listItems[i].style.listStyle = "none";
//     listItems[i].style.margin = "10px";
// }

// console.log(listItems);

let title = document.getElementById("title");
let p = document.getElementById("desc");
let input = document.getElementById("name");
let image = document.getElementById("image");
let button = document.getElementById("btn");

console.log(input.value);
    input.value = "John Doe"
    title.style.color = "blue";
    title.style.fontFamily = "Arial";

console.log(image.src);
    image.src = "https://picsum.photo/200/300"; // photos is correct link
    image.style.width = "200px";
    image.style.height = "300px";
    image.style.borderRadius = "25%";

    image.setAttribute("alt" , "Image Description, photobucket still exist?");

function clickMe(){
    console.log("a");
    alert("Button clicked!");
}

