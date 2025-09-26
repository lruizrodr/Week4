// 1. If-Else + Loop
// Write a program that prints all numbers from 1 to 20.
// If the number is divisible by 3, print "Fizz".
// If divisible by 5, print "Buzz".
// If divisible by both, print "FizzBuzz".

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 2. Functions
// Create a function checkEvenOdd(num) that takes a number as input and prints whether it is Even or Odd.
// Ask the user to enter a number using prompt().
// Call the function with that number.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

let userInput = prompt("Enter a number:");
checkEvenOdd(Number(userInput));


// 3. Objects
// Create a JavaScript object named student with properties: name, age, and grade.
// Print all values of the object.
// Add a new property subject = "JavaScript" dynamically and print the updated object.

let student = {
    name: "Lizard",
    age: 3410,
    grade: "A+",
};
console.log("name: " , student.name);
console.log("age: ", student.age);
console.log("grade: ", student.grade);
student.subject = "JavaScript";
console.log("dynamically: " ,student);

function addSubject() {
    let newSubject = prompt("Enter a new subject:");
    if (newSubject) {
        if (student.subject) {
            student.subject += ", " + newSubject;
    }
    else {
        student.subject = newSubject;
    }
        document.getElementById("output").textContent =
        JSON.stringify(student);
        console.log("Updated object: " + student.subject);
    }
}


// 4. DOM Manipulation
// Create an HTML page with a <p> tag containing "Hello Students".
// Add a button "Change Text".
// When clicked, the text should change to "Welcome to JavaScript DOM!".

function changeText() {
    document.getElementById("message").textContent = "Welcome to JavaScript DOM!";
}


// 5. Promises
// Write a promise that simulates checking homework submission.
// If homeworkDone = true, the promise should resolve with "Great job!".
// If homeworkDone = false, the promise should reject with "Please complete your homework.".
// Handle both cases with .then() and .catch()

let homeworkDone = true;
let checkHomework = new Promise((resolve, reject) => {
    if (homeworkDone === true) {
        resolve("Great job!");
    } else {
        reject("Please complete your homework.");
    }
});

checkHomework
.then(message => {console.log(message);
})
.catch(error => {console.log(error);
});