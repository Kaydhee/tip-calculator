'use strict'

const working = () => console.log('I am working');

const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const totalTip = document.querySelector('#total__tip');
const totalPeople = document.querySelector('#total__people');

// Percentage Buttons
const fivePercent = document.querySelector('.five');
const tenPercent = document.querySelector('.ten');
const fifteenPercent = document.querySelector('.fifteen');
const twentyPercent = document.querySelector('.twenty');
const fiftyPercent = document.querySelector('.fifty');

const resetBtn = document.querySelector('.reset__btn');
// console.log(resetBtn);


let result;
let value;
let finalValue;

fivePercent.addEventListener('click', (e) => {
    e.preventDefault();

    result = Number(bill.value * people.value);

    value = result * 0.05;

    finalValue = value + Number(bill.value);

    totalTip.textContent = `$${value}`;

    totalPeople.textContent = `$${finalValue.toFixed(1)}`;
});

tenPercent.addEventListener('click',  (e) => {
    e.preventDefault();

    result = Number(bill.value * people.value);

    value = result * 0.10;

    finalValue = value + Number(bill.value);

    totalTip.textContent = `$${value}`;

    totalPeople.textContent = `$${finalValue.toFixed(1)}`;
});

fifteenPercent.addEventListener('click', (e) => {
    e.preventDefault();

    result = Number(bill.value * people.value);

    value = result * 0.15;

    finalValue = value + Number(bill.value);

    totalTip.textContent = `$${value}`;

    totalPeople.textContent = `$${finalValue.toFixed(1)}`;
});

twentyPercent.addEventListener('click', (e) => {
    e.preventDefault();

    result = Number(bill.value * people.value);

    value = result * 0.25;

    finalValue = value + Number(bill.value);

    totalTip.textContent = `$${value}`;

    totalPeople.textContent = `$${finalValue.toFixed(1)}`;
});

fiftyPercent.addEventListener('click', (e) => {
    e.preventDefault();

    result = Number(bill.value * people.value);

    value = result * 0.50;

    finalValue = value + Number(bill.value);

    totalTip.textContent = `$${value}`;

    totalPeople.textContent = `$${finalValue.toFixed(1)}`;
});

// Resetting the calcuator
resetBtn.addEventListener('click', () => {
    result = 0;

    value = 0;

    finalValue = 0;

    bill.value = '';
    
    people.value = '';

    totalTip.textContent = `$${value}`;

    totalPeople.textContent = `$${finalValue}`;
})

