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

function greet(){
    console.log("Hello to JS functions!");
    }

greet();

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

function mul(){
    let num1 = parseInt(prompt("Enter first number: "));
    let num2 = parseInt(prompt("Enter second number: "));
    let result = num1 * num2;
    console.log("The product is: " + result);
}

mul();