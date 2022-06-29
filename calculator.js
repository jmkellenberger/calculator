const display = document.getElementById("results");
const inputs = document.getElementById("inputs");
const numBtns = [...document.getElementsByClassName('btn-number')];

const calc = {}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b === 0) return '#DIV/0!';
    return a/b;
}

function operate(operand1, operator, operand2) {
    switch(operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);
    }
}

function clearAll() {
    for (const key in calc) {
        delete calc[key]
    }
    updateDisplay();
}

function inputNum(key){
    'display' in calc ? 
            calc.display += `${key}`: calc.display = `${key}`;
    updateDisplay();
}

function inputOperator(key) {
}

function convertNeg() {
    if ('display' in calc) {
        let i = calc.display;
        calc.display =  i - (i * 2);
        updateDisplay();
    }
}

function updateDisplay() {
    'display' in calc ?
            display.textContent = calc.display : display.textContent = "";
    if ('operator' in calc) inputs.textContent = 
            `${calc.op1} ${calc.operator}`;
    if ('op2' in calc) inputs.textContent = 
            `${calc.op1} ${calc.operator} ${calc.op2}`;
}