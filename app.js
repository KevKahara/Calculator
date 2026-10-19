/**
 * Add 2 variables to store 2 numbers
 * Add a variable for the operator values i.e x, +, -, %
 * Add logic for operations i.e sum, difference, multiplication, division
 * Add logic for Equals to complete oprations
 * Make the number buttons responsive and display to the Display
 */

let num1 = '';
let num2 = '';
let operator = '';

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
    if(num2 === 0) {
        return 'Error, you cannot divide by zero!';
    }
    return num1 / num2;
}

function equals(num1, num2, operator) {
    if(operator === '+') return sum(num1, num2);
    if(operator === '-') return difference(num1, num2);
    if(operator === '*') return multiplication(num1, num2);
    if(operator === '/') return division(num1, num2);
}

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equals-btn');


function displayNum() {
    
    digits.forEach((digit) => {
        digit.addEventListener('click', (event) => {
    
            display.textContent += digit.textContent;
    
        });
    });

}

displayNum();

operators.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', (event) => {


        if(num1 === '') {
            num1 = Number(display.textContent);
            operator = operatorBtn.textContent;
            display.textContent = '';
        }
    });
});

equal.addEventListener('click', (event) => {

    if (num1 === '' || operator === '') return;
    
    num2 = Number(display.textContent);
    const result = equals(num1, num2, operator);

    display.textContent = result;
});