var result = 0;
var add = (number1, number2) => number1 + number2;
var subtract = (number1, number2) => number1 - number2;
var multiply = (number1, number2) => number1 * number2;
var divide = (number1, number2) => number1 / number2;

var getOperand = () => parseInt(document.getElementById("input-operand").value);

var showResult = (result) => {
    if (isNaN(result)){
        document.getElementById("result").innerText = "Error";
    } else {
        document.getElementById("result").innerText = result;
    }
}

var handleClickAdd = () => {
    result = add(result, getOperand());
    showResult(result);
}

var handleClickSubtract = () => {
    result = subtract(result, getOperand());
    showResult(result);
}

var handleClickMultiply = () => {
    result = multiply(result, getOperand());
    showResult(result);
}

var handleClickDivide = () => {
    result = divide(result, getOperand());
    showResult(result);
}

document.getElementById("button-add").addEventListener("click", handleClickAdd);
document.getElementById("button-subtract").addEventListener("click", handleClickSubtract);
document.getElementById("button-multiply").addEventListener("click", handleClickMultiply);
document.getElementById("button-divide").addEventListener("click", handleClickDivide);
