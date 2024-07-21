// SCRIPT FOR A BASIC CALCULATOR

// Function to append clicked button value to display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.textContent += value;
}

// Function to clear the display
function clearDisplay() {
    let display = document.getElementById('display');
    display.textContent = '';
}

// Function to delete the last character from the display
function deleteLast() {
    let display = document.getElementById('display');
    let currentExpression = display.textContent;
    display.textContent = currentExpression.slice(0, -1); // Remove the last character
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById('display');
    let expression = display.textContent;

    // Using try-catch to handle errors (e.g., division by zero)
    try {
        let result = eval(expression);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

