// // synchronous code
// console.log("start");
// console.log("middle");
// console.log("end");

// // asynchronous code
// console.log("start");
// setTimeout(() => {
//     console.log("middle, execution paused for 3 seconds");
// }, 3000);
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

let query = document.getElementById("query");
let result = document.getElementById("result");

let timerId = null;

query.addEventListener("input", () => {
    let value = query.value;
    console.log(value)
    result.textContent = "searching...";
    if(timerId) {
        clearTimeout(timerId);
    }
    timerId = self.setTimeout(() => {
        result.textContent = `search result for "${value}" (simulated)`;
    } , 5000);
});

let counter = 0;

let timerInterval =  setInterval(() => {
    counter++;
    console.log(`counter: ${counter}`);
    if(counter == 5) {
        clearInterval(timerInterval);
        console.log("timer stopped");
    }
}, 3000);

let display = document.getElementById("display");
let second = 0
let intervalId = null;

function formatTimer(second) {
    let hours = Math.floor(second / 3600);
    let minutes = Math.floor((second % 3600) / 60);
    let seconds = second % 60;
    return `${hours.toString()}: ${minutes.toString()}: ${seconds.toString()}`;
}


document.getElementById("start").addEventListener("click", () => {
    if(intervalId) return;
    intervalId = setInterval(() => {
        second++;
        display.textContent = formatTimer(second);
    }, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(intervalId);
    second = 0;
    display.textContent = formatTimer(second);
});

document.getElementById("restart").addEventListener("click", () => {
    clearInterval(intervalId);
    second = 0;
    display.textContent = formatTimer(second);
    intervalId = setInterval(() => {
        second++;
        display.textContent = formatTimer(second);
    }, 1000);
});

// JS Promise - an js object that represents an operation that hasn't completed yet,
// but is expected to do so in the future.

function getData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success === true) {
                resolve({ name: "Luis", age: 34 });
            } 
            else {
                reject("error: failed to fetch data");
            }
        }, 2000);
    });
}

getData(true).then(console.log).catch(console.log);
getData(false).then(console.log).catch(console.log);