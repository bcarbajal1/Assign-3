//Calculations
//Bryan Carbajal Albarran
let operationResults = [];
function runCalculator() {
    let operationResults = true;
    while (operationResults) {
        let firstNum = prompt("Please enter your first number:");
        let operation = prompt("Now enter any of the following operators (+, -, *, /, %):");
        let secondNum = prompt("Enter your second number:");
        if (firstNum === null || secondNum === null || operation === null) {
            break;
        }
        firstNum = parseFloat(firstNum);
        secondNum = parseFloat(secondNum);
        let calcResult;
        if (isNaN(firstNum) || isNaN(secondNum)) {
            calcResult = "Invalid input";
        } else {
            switch (operation) {
                case "+":
                    calcResult = firstNum + secondNum;
                    break;
                case "-":
                    calcResult = firstNum - secondNum;
                    break;
                case "*":
                    calcResult = firstNum * secondNum;
                    break;
                case "/":
                    calcResult = secondNum !== 0 ? firstNum / secondNum : "Division by 0";
                    break;
                case "%":
                    calcResult = firstNum % secondNum;
                    break;
                default:
                    calcResult = "Unknown operator";
            }
        }
        if (!isNaN(calcResult) && typeof calcResult === "number") {
            operationResults.push(calcResult);
        }
        document.write("<table>");
        document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
        document.write(`<tr><td>${firstNum}</td><td>${operation}</td><td>${secondNum}</td><td>${calcResult}</td></tr>`);
        document.write("</table>");
        continueCalculation = confirm("For another Calculation click 'OK'" + "\n" + "For Results click 'Cancel'");
    }
    if (operationResults.length > 0) {
        displayResults();
    }
}
function displayResults() {
    let minResult = Math.min(...operationResults);
    let maxResult = Math.max(...operationResults);
    let totalResult = operationResults.reduce((sum, value) => sum + value, 0);
    let averageResult = totalResult / operationResults.length;
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${minResult}</td><td>${maxResult}</td><td>${averageResult.toFixed(2)}</td><td>${totalResult}</td></tr>`);
    document.write("</table>");
}
runCalculator();
