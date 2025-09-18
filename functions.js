// function greet(){
//     console.log("alo world!");
// }

// function addition(number1, number2, number3, number4){  // function -> fvariable -> (parameters)
//     console.log(number1 + number2, number3, number4);
// }

// addition(10, 20); // this is called an argument
// addition(100, 200);
// addition(1, 2);
// addition(5, 5, 5) //3 parameters
// greet();
// greet();
// greet();

// function min(numbers){
//     let min = numbers[0];
//     for(let i =0; i < numbers.length; i++){
//         if(min > numbers[i]){
//             min = numbers[i];
//         }
//     }
//     console.log("Minimum is: " + min);
// }



// function sum(numbers){
//     let sum =0
//     for(let i=0; i < numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// function avg(sum, count){
//     return sum / count;
// }


// min([3,5,11,-3,5,89]);
// min([30,50,10,40,5,89]);
// min([300,500,100,400,50,890]);

// let items = [30,50,10,40,5,89,5,5];


// let count5 = 0;
// for (let i =0; i < items.length; i++){
//     if (items[i] ===5){
//     count5++;
//     }
// }
// console.log("Number of 5's in items: " + count5)

// function searchWithCount(items){
//     let input = parseInt(prompt("Enter a number to search: "));
//     let notify = false;
//     let count = 0;

//     for (let i = 0; i < items.length; i++) {
//         if (items[i] ===input) {
//             notify = true;
//             count++;
//         }
//     }

//     if (notify) {
//         console.log(input + " is in the list found " + count + " time(s).");
//     } else {
//         console.log(input + " is not found in the list.");
//     }
// }

// searchWithCount(items);

// let a = sum(items);
// console.log("Sum is a: " + a);

// let b = avg(a , items.length);
// console.log("Avarage is: " + b)

// SIMPLE FUNCTION:

// function greet(){
//     console.log("Hello to JS functions!");
//     }

// greet();

//function with parameters:

// function addNumbers(a, b){
//     let sum = a + b;
//     console.log("the sum is: " + sum);
//     }
//     addNumbers(5, 10);
//     addNumbers(10, 20);
//     addNumbers(20, 30);

// function multiplyNumbers(a, b){
//     let product = a * b;
//     console.log("The product is: " + product);
//     }
//     multiplyNumbers(5, 10);
//     multiplyNumbers(10, 20);
//     multiplyNumbers(20, 30);

// function divideNumbers(a, b){
//     let quotient = a / b;
//     console.log("The quotient is: " + quotient);
// }
//     divideNumbers(5, 10);
//     divideNumbers(10, 20);
//     divideNumbers(20, 30);

// function subtractNumbers(a, b){
//     let difference = a - b;
//     console.log("The difference is: " + difference);
//     }
//     subtractNumbers(5, 10);
//     subtractNumbers(10, 20);
//     subtractNumbers(20, 30);

// function with user input:

// function mul(){
//     let num1 = parseInt(prompt("Enter first number to multiply: "));
//     let num2 = parseInt(prompt("Enter second number: "));
//     let result = num1 * num2;
//     console.log("The product is: " + result);
// }

// mul();

// function div(){
//     let num3 = parseInt(prompt("Enter first number to divide: "));
//     let num4 = parseInt(prompt("Enter second number: "));
//     let result = num3 / num4;
//     console.log("The quotient is: " + result);
// }

// div();

// // Function that returns a value:

// function square(num){
//     return num * num;
// }
// let result = square(4);
// confirm("The square of 4 is: " + result);




// function runprogram(){
//     let fruits = ["apple", "banana", "mango"];
//     let choice;

//     while(true){
//         choice = prompt("Add: Apple, Banana, Mango, or quit");
//         if(choice.toLowerCase() === "quit"){
//             console.log("Goodbye!");
//             break; // stops the loop
//         }
//         if(fruits.includes(choice.toLowerCase())){
//             console.log(choice + " added to the list.");
//         }
//         else{
//             console.log(choice + " is not a valid option.");
//         }
//     }
// }

// runprogram();

//practice:

// function runprogram(){
//     let lightsabers = ["blue", "green", "red", "yellow"];
//     let choice;

//     while(true){
//         choice = prompt("Turn on: Blue, Green, Red, Yellow, or quit");
//         if(choice.toLowerCase() === "quit"){
//             console.log("Goodbye!");
//             break; // stops the loop
//         }
//         if(lightsabers.includes(choice.toLowerCase())){
//             console.log(choice + " lightsaber turned on.");
//         }
//         else{
//             console.log(choice + " is not a valid option.");
//         }
//     }
// }

// runprogram();

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     greet: function(){
//         console.log("Hello" + this.firstName);
//     },
//     work: function(){
//         console.log(this.firstName + " is working...");
//     }
// };

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: "2018",
//     customeCleared: false,
//     start: function(){
//         console.log("Car started...");
//     },
//     stop: function(){
//         console.log("Car stopped...");
//     }
// };
// let a_ = car.brand;
// let b_ = car.model;

// let {brand, model} = car;
// console.log(brand);
// console.log(model);

// console.log(car);
// console.log(car.brand);
// console.log(car.year);

// car.start();
// car.stop();

// let starfighter = {
//     model: "T-65B",
//     propulsion: "4 x Incom 4L4 fusial thrust engines",
//     hyperdrive: "Class-1 Koensayr GBk-585",
//     systems: "Novaldex 04-z cryogenic power generator",
//     customeCleared: false,
//     start: function(){
//         console.log("Starfighter started...");
//     },
//     stop: function(){
//         console.log("Starfighter stopped...");
//     }
// };

// console.log(starfighter);
// console.log(starfighter.model);
// console.log(starfighter.propulsion);
// console.log(starfighter.hyperdrive);
// console.log(starfighter.systems);

// starfighter.start();
// starfighter.stop();


// Destructing
// let numbers = [10, 20, 30, 40, 50];

// let [a, b, c, d] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // spread operator (...)

// let veggies = ["apple", "banana", "mango"];
// let fruits = ["orange", "grape", "pear"];

// let food = [...veggies,...fruits];

// console.log(food);

// let copyFood = [...food];
// copyFood = "cherry";

// console.log(food);

// let user = {name: "John Doe", age: 30};
// let details = { city: "New York", country: "USA"};
// let userProfile = {...user,...details};

// console.log(userProfile);

// let person1 = {name: "Robert"};
// let person2 = {name: "Luis"};

// person2 = person1;

// person2.name = "Jake";

// console.log(person1);
// console.log(person2);

// DEEP CLONING

// person2 = structuredClone(person1);
// person2.name = "Jake";

// console.log(person1.name);
// console.log(person2.name);

//Write a function that accepts an array(list of letters) as parameter, the function should display the count of each item that is in the array. 
//you have to pass the array values to the function from prompt. 
//how to pass array values into the functions:
//when you start the browser, a prompt should be there asking you to enter the item, you will keep adding the items in the array until you pass 0 to exit. 

//the output should be: 
//a appears 3 times
//b appears 2 times
//c appears 3 times

// function countItems(arr){
//     let countObj = {};
//     for (let i = 0; i < arr.length; i++){
//         let item = arr[i];
//         if (countObj[item]) {
//             countObj[item] = countObj[item] + 1;
//         } else {
//             countObj[item] = 1;
//         }
//     }
//     for (let key in countObj){
//         console.log(key + " appears " + countObj[key] + " times");
//     }
// }
// let items = [];
// while (true) {
//     let input = prompt("Enter letters separated by comma (type 0 to stop):"); 
//     if (input === "0"){
//         break;
//     }
//     let letters = input.split(",");
//     for (let i = 0; i < letters.length; i++){
//         let letter = letters[i].trim().toLowerCase(); 
//         if (letter !== "") {
//             items.push(letter);
//         }
//     }
// }
// countItems(items);
