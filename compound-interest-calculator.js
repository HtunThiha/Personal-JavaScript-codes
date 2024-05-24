const input = require('readline-sync');

console.log("This program will calculate compound interest");

let baseAmount = input.questionInt("Enter the base amount: ");
let percentage = input.questionInt("How much percentage is the Interest?");
let totalTime = input.question("How many years will the interest commence?: ");
let interval = input.question("In how much period of time the interest will be increased once?: ");


function convertToDay(time) {
    
    if (time[time.length-1] == "D") {
        time.pop();
        return parseInt(time);
    }
    else if (time[time.length-1] == "M") {
        time.pop();
        return parseInt(time * 30.437);
    }
    else if (time[time.length-1] == "Y") {
        time.pop();
        return parseInt(time * 365);
    }
}

let numberOfInterests = Math.floor(convertToDay(baseAmount) / convertToDay(interval));

function calculateInterest(base, frequency, percentage) {
    
    let result = base;
    for (let i = 0; i < frequency; i++) {
        result += result * (percentage / 100);
        
    }
    return result;
}

console.log(`The total amount after interest is ${calculateInterest(base, numberOfInterests, percentage)}`);