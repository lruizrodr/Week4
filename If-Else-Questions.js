//If-Else Questions
// 1-even or odd
let numb = parseInt(prompt("Q(1)Even or Odd"));
if (numb % 2 === 0){
    console.log(numb + "is Even");
}
else{
    console.log(numb + "is Odd");
}
// 2-age vote elegibility
let age = parseInt(prompt("Q(2)Enter your age"));
if (age >=18){
    console.log("Eligibile!")
}
else{
    console.log("Not-Eligibile WOMP WOMP")
}
// 3-check if a number is ( + , - or 0 ) "numb" taken using "number"
let number = parseInt(prompt("Q(3)Pos, Neg or Zero!:"))
if (number > 0){
    console.log("Positive")
}
else if(number <0){
    console.log("Negative")
}
else{
    console.log("Zero")
}
// 4-is divisible by 5 and 11 "numb" and "number" taken using "n"
let n = parseInt(prompt("Q(4)Enter your lucky number or 55"));
if (n % 5 ===0 && n % 11 ===0){
    console.log(n + "is divisible by 5 and 11");
}
// For loop Questions
// 1- Print 1 - 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}
// 2- Print multiplication table of 5 thru for loop
for (let i = 1; i <= 10; i++){
    console.log("5 x " + i + " = " + (5 * i));
}
// If-Else + For Loop Practice Questions
// 1-Print #1-20 for each number cheack and print result
for (let i = 1; i <= 20; i++){
    if (i % 2 ===0){
        console.log(i + "Even");
    }
    else{
        console.log(i + "Odd");
    }
}
// 2-Print multiplication table of 7 and string numbers greater than 50 with "big number" otherwise result only
for (let i = 1; i <= 10; i++){
    let result = 7 * i;
    if (result > 50){
        console.log(result + "Big Number")
    }
    else{
        console.log("7 x " + i + "=" + result)
    }
}
// 3-Print #1-50, if divisible by 3 print "Fizz" by 5 "Buzz", if by both "FizzBuzz"
for (let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz");
    }
    else if (i % 3 ===0){
        console.log("Fizz")
    }
    else if (i % 5 ===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
// 4-Sum of even numbers between 1-100 
let sum =0
for (let i =2; i <100; i+=2){
    sum +=i;
}
console.log("even sum total" + sum)
// 5-Prime numbers between 1 and 50 "numb" Number" and "N" in use, using "num"
for (let num = 2; num <=50; num++){
    let isPrime = true;
    for (let j = 2; j <=Math.sqrt(num); j++){
        if(num % j ===0)
        isPrime = false;
        break;
    }
    if (isPrime) {
    console.log(num + "is Prime")
    }
}
