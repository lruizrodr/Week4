function greet(){
    console.log("alo world!");
}

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

function min(numbers){
    let min = numbers[0];
    for(let i =0; i < numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
    }
    console.log("Minimum is: " + min);
}



function sum(numbers){
    let sum =0
    for(let i=0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

function avg(sum, count){
    return sum / count;
}


min([3,5,11,-3,5,89]);
min([30,50,10,40,5,89]);
min([300,500,100,400,50,890]);

let items = [30,50,10,40,5,89,5,5];


// let count5 = 0;
// for (let i =0; i < items.length; i++){
//     if (items[i] ===5){
//     count5++;
//     }
// }
// console.log("Number of 5's in items: " + count5)

function searchWithCount(items){
    let input = parseInt(prompt("Enter a number to search: "));
    let notify = false;
    let count = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i] ===input) {
            notify = true;
            count++;
        }
    }

    if (notify) {
        console.log(input + " is in the list found " + count + " time(s).");
    } else {
        console.log(input + " is not found in the list.");
    }
}

searchWithCount(items);

let a = sum(items);
console.log("Sum is a: " + a);

let b = avg(a , items.length);
console.log("Avarage is: " + b)