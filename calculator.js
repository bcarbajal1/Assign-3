function promptUser() {
    let results = [];
    while (true) {
        let x = prompt("Enter the first number:");
        if (x === null) break;
        let y = prompt("Enter the second number:");
        if (y === null) break;
        let operator = prompt("Enter an operator (+, -, *, /, %):");
        if (operator === null) break;

        x = parseFloat(x);
        y = parseFloat(y);
        let result;

        if (isNaN(x) || isNaN(y)) {
            result = "Invalid number";
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
                    result = y !== 0 ? x / y : "Division by zero";
                    break;
                case '%':
                    result = x % y;
                    break;
                default:
                    result = "Invalid operator";
            }
        }

        results.push({ x, operator, y, result });
    }
    return results;
}
function displayResults(results) {
    document.write("<table border='1'>");
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
    results.forEach(entry => {
        document.write(`<tr><td>${entry.x}</td><td>${entry.operator}</td><td>${entry.y}</td><td>${entry.result}</td></tr>`);
    });
    document.write("</table>");
}

function displaySummary(results) {
    let validResults = results.filter(entry => typeof entry.result === 'number');
    if (validResults.length === 0) return;

    let min = Math.min(...validResults.map(entry => entry.result));
    let max = Math.max(...validResults.map(entry => entry.result));
    let total = validResults.reduce((sum, entry) => sum + entry.result, 0);
    let avg = total / validResults.length;

    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
    document.write("</table>");
}

let results = promptUser();
displayResults(results);
displaySummary(results);
