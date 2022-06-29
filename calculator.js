const calculator = {}

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

function clear() {
    for (const key in calculator) {
        delete calculator[key]
    }
}