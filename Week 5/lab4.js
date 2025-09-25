// Task 1 – Promise Success/Failure
// Write a program that creates a promise which:
// Resolves with "Data fetched successfully!" if a random number is greater than 0.5.
// Rejects with "Failed to fetch data!" otherwise.
// Print the result using .then() and .catch().
let fetchData = new Promise((resolve,reject) => {
    let randomNumber = Math.random();
    console.log("generated random number: ", randomNumber);

    if (randomNumber < 0.5) {
        resolve('Genetic data fetched successfully');
    } else {
        reject('Failed to fetch genetic data');
    }
})

fetchData
.then(result => {console.log(result)})
.catch(error => {console.log(error)})

// Task 2 – Promise with setTimeout
// Write a program that uses a promise to simulate a 3-second delay.
// After 3 seconds, it should resolve with "Task completed!".
// Print the message to the console.
// (Hint: Use setTimeout inside a Promise.)

let delayedTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Just like New World devs, who love to sync healthbar UI ...3 seconds  laters after dmg is recieved!');
    }, 3000);
})

delayedTask
.then(result => {console.log(result)})
.catch(error => {console.log(error)})

// Task 3 – Chained Promises
// Write a program that chains promises:
// First promise resolves with "Step 1 done".
// Then another .then() should log "Step 2 done".
// Finally log "All steps completed!".

let humanCentepides = new Promise((resolve, reject) => {
    resolve("First section attached");
});

humanCentepides
.then(result => {
    console.log(result);
    return ("Second section attached");
})
.then(result => {
    console.log(result);
    return ("Third section attached, we are now 5 meters in length, need more bodies!");
})
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})