// function clickA(){
//     alert("Button A clicked!");
// }
// function clickB(){
//     alert("Button B clicked!");
// }
// // document.getElementById("btn1").addEventListener("click", clickA);
// document.getElementById("btn1").addEventListener("dblclick", clickA);
// document.getElementById("btn2").addEventListener("click", clickB);
// document.getElementById("btn3").addEventListener("click", function(){
//     alert("Button C clicked!");
// });
// document.getElementById("btnRemove").addEventListener("click", () =>   {
//     document.getElementById("btn1").removeEventListener("click", clickA);
//     document.getElementById("btn2").removeEventListener("click", clickB);
    
// });
// document.getElementById("btn2").addEventListener("click", () => {
//     alert("Button B clicked!");
// });

// let container = document.getElementById("container");

// container.addEventListener("click", (event) => {
//     console.log("Container clicked" + event.target + "event type" + event.type);
// });

// let innerDiv = document.getElementById("innerDiv");
// innerDiv.addEventListener("click", (event) => {
//     console.log("Inner Div clicked" + event.target + "event type" + event.type);
//     event.stopPropagation();
// });


let input = document.getElementById("input");

input.addEventListener("input", (event) => {
    document.getElementById("preview").innerText = event.target.value;
});