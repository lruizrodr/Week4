let jsonString = `[
{"id": 1,
"name":"Leanne Graham",
"email": "Sincere@april.biz"} , 
{"id": 2,
"name":"Vader",
"email": "oink@april.biz"}
]`;

let jObject = JSON.parse(jsonString);

console.log(jObject[0].id);
console.log(jObject[0].name);
console.log(jObject[0].email);

let person = {
    name: "Luis",
    age: 34,
    email: "papitasconketchup@gmail.com"
}

let jsonPerson = JSON.stringify(person);

console.log(jsonString);

document.getElementById("loadUserBtn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((Response) => {
        return Response.json();
    })
    .then(data => {
        console.log(data);
        for(let i = 0; i < data.length; i++){
        document.getElementById("data").innerHTML += `Name is: ${data[i].name} and Email is: ${data[i].email} <br>` ;
        }
    });
    
});

let nameOfImage = null;

document.getElementById("imageBtn").addEventListener("click", async () => {
    let response = await fetch(`https://foodish-api.com/api/images/burger`);
    let data = await response.json();
    
    console.log(data);
    nameOfImage = data.image;  // Fixed

    document.getElementById("image-name").textContent = data.image;

    let image = document.getElementById("data-image");  // Fixed ID
    image.setAttribute("src", data.image);
    image.onload = () => {
        console.log("Image loaded successfully!");
    }

    console.log(nameOfImage);
});