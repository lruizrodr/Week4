// let firstValue = prompt("Enter the first value");
// let secondValue = prompt("Enter the second value");

// let result = firstValue + secondValue; // erroneous result

// console.log(result);
// alert(result);

// destrcuring-spread-rest-js

function logName (name) {
    let {first,last} = name; // object property shorthand notation
    console.log(first, last);
}
