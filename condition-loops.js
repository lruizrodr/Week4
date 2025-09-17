// let a = 5;

// let b = parseInt(prompt("Enter a number"))

// console.log(a + b);

// if (a > 10){
//     console.log(a + " Is greater than 10");
// }

// else{
//     console.log(a + " Is not greater than 10");
// }

// let per = prompt("Enter your percentage: ");

// if (per >=70 && per <80)
// {
//     console.log("B grade")
// }
 
// else if(per >= 80 && <90)
// {
//     console.log("A grade")
// }
// else if(per >= 90)
// {
//     console.log("A+ grade")
// }
// else
// {
//     console.log("Fail")
// }

// let a = parseInt(prompt("Enter number 1:"));
// let b = parseInt(prompt("Enter number 2:"));
// let c = parseInt(prompt("Enter number 3:"));

// if (a > b && a > c) {
//     console.log(a + " is greatest");
//     if (b > c) {
//         console.log(b + " is second greatest");
//         console.log(c + " is smallest");
//     } else {
//         console.log(c + " is second greatest");
//         console.log(b + " is smallest");
//     }
// }
// else if (b > a && b > c) {
//     console.log(b + " is greatest");
//     if (a > c) {
//         console.log(a + " is second greatest");
//         console.log(c + " is smallest");
//     } else {
//         console.log(c + " is second greatest");
//         console.log(a + " is smallest");
//     }
// }
// else if (c > a && c > b) {
//     console.log(c + " is greatest");
//     if (a > b) {
//         console.log(a + " is second greatest");
//         console.log(b + " is smallest");
//     } else {
//         console.log(b + " is second greatest");
//         console.log(a + " is smallest");
//     }
// }
// else {
//     console.log("Some numbers are equal, try again!");
// }

// let username = prompt("Enter username:");
// let password = prompt("Enter password");

// if (username == "admin");
// {
//     if(password == "admin123")
//     {
//         console.log("Login succedsful");
//     }
//     else
//     {
//         console.log("Wrong password! Login failed")
//     }


//     else
// {
//     console.log("Wrong Username! Login failed");
// }

// for(let i = 0; i < 10; i+=2) //  (let i = 10; i < 0; i--)
// {
//     console.log("JS " + i);
// }

// let a = parseInt(prompt("Min"));
// let b = parseInt(prompt("Max"));

// for(let c = a; c < b; c++) 
// {
//     if (c % 7 ===0)
//         console.log("JS " + c);
//     }
     
let colors = ["red", "green", "blue", "yellow", "black", "purple", "white", "Pink"]; // array
// colors.push("brown")
// console.log(colors)

// console.log(colors[3])
// console.log(colors[6])

// console.log(colors.length)

// for(let i =colors.length - 1; i >=0; i--)
// {
//     console.log(colors[i])
// }


// let x = 15, y = 5;
// console.log(x / y + x % 7 );

// //=================================

// //check if a number is positive or negative. (check which contidition is true)

// let num = 5;

// if(num > 0){
//     console.log("the number is positive.")
// }
// else{
//     console.log("the number is negative.")
// }

// //check voting eligibility

// let age = 16;

// if(age>=18){
//     console.log("You are eligibile to vote")
//     }

// else{
//     console.log("You are not eligibile to vote")
// }
// //print even odd numbers using else.

// let number = 7

// if (number % 2 ==0){
//     console.log("even number")
// }
// else{
//     console.log("odd numbers")
// }

// //check password length

// let password= "12345";

// if (password.length >=6){
//     console.log("Password is strong")
// }
// else{
//     console.log("Password is too short")
// }

// //grade check

// let grade = parseInt(prompt("Enter your grade:"));

// if (grade >= 90) {
//     console.log("Grade: A");
// } else if (grade >= 80) {
//     console.log("Grade: B");
// } else if (grade >= 70) {
//     console.log("Grade: C");
// } 
// else {
//     console.log("Grade: F");
// }

// //print even and odd number

// for (let i = 1; i <=10; i++){
//     if (i % 2 ==0){
//         console.log(i+ ":is Even");
//     }
//     else{
//         console.log(i+ ":is Odd");
//     }
// }

// //find number greater than 50

// let numb = [10,55,32,80,95]

// for (let i = 0; i < numb.length; i++){
//     if(numb[i]> 50){
//         console.log(numb[i] + "is Greater than 50")
//     }
//     else{
//         console.log(numb[i] + "is Not Greater than 50")
//     }
// }

// // print pass or fail

// let marks = [35,60,80];

// for(let i = 0; i < marks.length; i++){
//     if (marks[i] >=50){
//         console.log("student" +(i+1)+ ":is pass")
//     }
//     else{
//         console.log("student" +(i+1)+ ":is fail")
//     }
// }

// while loop
let i =0;
// while(i < 10){
//     console.log("Hello" + i);
//     i++;
// }

// while(true){
//     let number = parseInt(prompt("Enter a number"));
//     if(number ==0){
//         break;
//     }
//     else{
//         console.log("You entered:" + number)
//     }
// }

// let numbers = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, 2, -20, -30, 100]

// let min = numbers[0];
// for(let i =0; i < numbers.length; i++){
//     if(min > numbers[i]){
//         min = numbers[i]
//     }
// }
// console.log("Min is:" + min);

// let numbers = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, 2, -20, -30, 100]

// let max = numbers[0];
// for(let i =0; i < numbers.length; i++){
//     if(max < numbers[i]){
//         max = numbers[i]
//     }
// }
// console.log("Max is:" + max);

//display the sum of whole list
//display the average of the list

// let numbers = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, 2, -20, -30, 100]
// let sum =numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// let average = sum / numbers.length;

// console.log("Sum is: " + sum);
// console.log("Average is: " + average);

// let numbers = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, 2, -20, -30, 100]
// let notify = true;
// let position = numbers [0]
// let input = parseInt(prompt("Enter a number to search: "));
// for (let i =0; i < numbers.length; i++){
//     if(numbers[i] ==input){
//         notify = true;
//         position = i
//         break;
//     }
//     else{
//         notify = false;
//     }
// }
// if (notify == true){
//     console.log(input + " is in the list on position: " + position)
// }
// else{
//     console.log(input + "is not found in list")
// }

