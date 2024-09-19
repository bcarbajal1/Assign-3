// Function to run the calculator
function runCalculator() {
    let results = [];
    let continueLoop = true;

    while (continueLoop) {
        // Get user input
        let x = prompt("Enter the first number (x):");
        if (x === null) break; // Exit if the user clicks Cancel
        let y = prompt("Enter the second number (y):");
        if (y === null) break; // Exit if the user clicks Cancel
        let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
        if (operator === null) break; // Exit if the user clicks Cancel

        // Convert x and y to numbers
        x = parseFloat(x);
        y = parseFloat(y);

        let result;

        // Check if x and y are numbers and operator is valid
        if (isNaN(x) || isNaN(y)) {
            result = "wrong input number";
        } else {
            switch (operator) {
                case '+':
                    result = x + y;
                    break;
                case '-':
                    result = x - y;
                    break;
                case '*':
                    result = x * y;
                    break;
                case '/':
                    result = y !== 0 ? x / y : "division by zero";
                    break;
                case '%':
                    result = x % y;
                    break;
                default:
                    result = "computation error";
                    break;
            }
        }

        // Store the result in an array if valid
        if (typeof result === 'number') {
            results.push(result);
        }

        // Display the result in a table
        document.write("<table>");
        document.write("<tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>");
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
        document.write("</table>");

        // Ask the user if they want to continue
        continueLoop = confirm("Do you want to perform another calculation?");
    }

    // Display summary statistics if there are valid results
    if (results.length > 0) {
        let min = Math.min(...results);
        let max = Math.max(...results);
        let total = results.reduce((acc, curr) => acc + curr, 0);
        let avg = total / results.length;

        // Display summary table
        document.write("<table>");
        document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
        document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
        document.write("</table>");
    }
}

// Run the calculator
runCalculator();
