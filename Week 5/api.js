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
// LIZARDS https://api.gbif.org/v1/species/search?q=lizard&highertaxon_key=715&limit=10
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

