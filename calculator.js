const numBtns = document.querySelectorAll('[data-number]');
const opBtns = document.querySelectorAll('[data-operator]');
const clearBtn = document.getElementById('ac');
const negBtn = document.getElementById('neg');
const delBtn = document.getElementById('del');
const equalsBtn = document.getElementById('=');
const upperDisplay = document.getElementById('upper');
const lowerDisplay = document.getElementById('lower');

let currentOperand = '';
let previousOperand = '';
let operator = null;
let resetDisplay = false;
let lastOperand = null;

delBtn.addEventListener('click', del);
clearBtn.addEventListener('click', clear);
negBtn.addEventListener('click', swapNeg);
equalsBtn.addEventListener('click', compute)
numBtns.forEach((button) => {
    button.addEventListener('click', () => inputNum(button.textContent))
})
opBtns.forEach((button) =>
    button.addEventListener('click', () => chooseOperation(button.id))
)

window.addEventListener('keydown', parseKey); 
function parseKey(e) {
    let operators = ['+', '-', '*', '/']
    if ((e.key >= 0 && e.key < 10) || e.key === '.') inputNum(e.key);
    else if (operators.includes(e.key)) chooseOperation(e.key);
    else if (e.key === 'Backspace') del();
    else if (e.key === 'Enter') compute();1234
}
    
;1
function inputNum(num) {
    if (resetDisplay) storeOperand();
    if ((num === '.' && lowerDisplay.textContent.includes('.')) || num === '0' && lowerDisplay.textContent === '0') return;
    currentOperand += num;
    lowerDisplay.textContent = currentOperand;
}
function del() {
    if (currentOperand = '') return;
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}
function chooseOperation(operation) {
    resetDisplay = true;
    operator = operation;
}

function clear() {
    previousOperand = '';
    currentOperand = '';
    operator = null;
    resetDisplay = false;
    lowerDisplay.textContent = '';
    upperDisplay.textContent = '';
}

function updateDisplay() {
    lowerDisplay.textContent = currentOperand;
    if (previousOperand === '') return;
    else upperDisplay.textContent = `${previousOperand} ${operator}`
}
function storeOperand() {
    resetDisplay = false;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function swapNeg() {
    if (currentOperand === '') return;
    currentOperand -= (currentOperand * 2);
    updateDisplay();
}
function compute() {
    if (previousOperand === ''|| operator === null || currentOperand === '') return;
    console.log(previousOperand);
    console.log(operator);
    console.log(currentOperand);
    resetDisplay = true;
    currentOperand = operate(previousOperand, operator, currentOperand);
    if (currentOperand === Infinity) {
        currentOperand = '';
        upperDisplay.textContent = ''
        lowerDisplay.textContent = "Bad! No divide by zero!!!";
        return
    }
    updateDisplay();
    upperDisplay.textContent = `${previousOperand} ${operator} ${lastOperand} =`

}
function add(a, b) {
    return round(a+b);
}

function subtract(a, b) {
    return round(a-b);
}

function multiply(a, b) {
    return round(a*b);
}

function divide(a, b) {
    return round(a/b);
}

function operate(operand1, operation, operand2) {
    if (operand1 === '' || operation === null || operand2 === '') return
    a = Number(operand1)
    b = Number(operand2)
    lastOperand = b;
    switch(operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }   
}

function round(num) {
    return Math.round(num * 1000)/1000
}
