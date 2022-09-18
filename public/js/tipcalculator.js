// Building a tip calculator
// First we will need the amount spent on food
// and the percentage you would like to tip.
// Create a variable that takes input.
// Use Number() to ensure the return is a number not a string.
// Use /100 since you are looking for the percentage.

// let foodCost = Number(prompt("How much was your meal?"));
// let tipping = Number(prompt("What percentage you wanna tip big boy?")/100);

// let tip = foodCost * tipping;
// console.log(tip);

// const tip = () => {
//     let foodCost = Number(prompt("How much was your meal?"));
//     let tipping = Number(prompt("What percentage you wanna tip big boy?")/100);

//     console.log(foodCost * tipping)
//     alert(foodCost * tipping)
// };
// tip();

// New Improved
// const foodTotal = (food, tip) => {
//     const  tipPercent = tip/100
//     const tipAmount = food * tipPercent
//     const total = food + tipAmount
//     console.log("The Tip is: " + tipAmount)
//     console.log("This is the total cost of your meal: " + total)
//     return total
// };
// console.log(foodTotal(100, 20));
// console.log('helloworld')


// let title = document.getElementById('title')
// console.log(title.innerText)

// #### Now for the actual code
// this will get the global variables

let foodCost = document.getElementById('foodCost');
let tipCost = document.getElementById('tipCost');
let btnUp = document.getElementById('btnUp');
let btnDown = document.getElementById('btnDown');
let numOfPeople = document.getElementById('numOfPeople');
let numberOfPeople = Number(numOfPeople.value);
let splitBill = document.getElementById('splitBill');

// Setting some values to default

splitBill.innerText = '$0.00';
numOfPeople.value = 1;

// Now the calculate bill function
// it will get the value of the food cost...
// and the tip from the html input fields
// it will then multiply them and add them...
// for the total bill.
// It will then split that bill across a number...
// of people and update the html text continiously
// onkeyup for the calculateBill()
// onclick for the increase/decreasePeople() in html

const calculateBill = () => {
    const bill = Number(foodCost.value)
    // console.log(bill)
    const tipPercent = Number(tipCost.value)/100
    // console.log(tipPercent);
    const tipAmount = bill * tipPercent
    // console.log({tipAmount})
    const total = tipAmount + bill
    // console.log({total})
    let numberOfPeople = Number(numOfPeople.value)
    const perPercent = total / numberOfPeople
    // console.log(perPercent)
    
    splitBill.innerText = `$${perPercent.toFixed(2)}`
};

const increasePeople = () => {
    numberOfPeople++
    numOfPeople.value = numberOfPeople
    calculateBill()
};
const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return
    } else {
        numberOfPeople--
        numOfPeople.value = numberOfPeople
        calculateBill()
    }
};

// complete!!!!