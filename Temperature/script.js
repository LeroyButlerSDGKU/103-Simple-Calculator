// script.js

console.log("Calculator");

function calculate(operator) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
        default:
            result = "Invalid operator";
    }

    console.log("Result:", result);
}

// Call the function for the provided interaction
console.log("Enter the first number: 5");
console.log("Enter the second number: 3");
console.log("Select the operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("Enter the number corresponding to the desired operation: 1");
calculate('+'); // Perform addition for the given numbers

