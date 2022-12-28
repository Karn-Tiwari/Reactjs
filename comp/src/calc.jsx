
function add(a, b) {
    return a +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    let div = a / b;
    div = div.toFixed(2);
    return div;
}

export {add, subtract, multiply, divide};