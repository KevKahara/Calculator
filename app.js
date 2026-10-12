/**
 * Add 2 variables to store 2 numbers
 * Add a variable for the operator values i.e x, +, -, %
 * Add logic for operations i.e sum, difference, multiplication, division
 * Add logic for Equals to complete oprations
 * Make the number buttons responsive and display to the Display
 */

let num1;
let num2;
let operator;

function sum(num1, num2) {
    return num1 + num2;
}

function difference(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function equals(num1, num2, operator) {
    if(operator === '+') return sum(num1, num2);
    if(operator === '-') return difference(num1, num2);
    if(operator === '*') return multiplication(num1, num2);
    if(operator === '/') return division(num1, num2);
}

const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {

        //Determine what button was clicked
        
    });
});