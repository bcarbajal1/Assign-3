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
