// Get references to elements
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");
const digits = document.querySelectorAll(".digit");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");

let currentInput = "";
let operator = "";
let firstOperand = "";

// Add event listeners to digit buttons
digits.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        currentInput += digitButton.textContent;
        display.textContent = currentInput;
    });
});

// Add event listeners to operator buttons
operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        operator = operatorButton.textContent;
        firstOperand = currentInput;
        currentInput = "";
    });
});

// Clear button functionality
clearButton.addEventListener("click", () => {
    currentInput = "";
    operator = "";
    firstOperand = "";
    display.textContent = "0";
});

// Calculate button functionality
calculateButton.addEventListener("click", () => {
    const secondOperand = currentInput;
    let result;

    if (operator === "+") {
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (operator === "-") {
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (operator === "*") {
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (operator === "/") {
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
    }

    display.textContent = result;
    currentInput = result;
    operator = "";
    firstOperand = "";
});
