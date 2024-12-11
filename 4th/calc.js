class Calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) return "The number can't be divided by zero";

        return a / b;

    }
}

let calculator = new Calculator();

console.log(calculator.subtract(4,5));
console.log(calculator.add(5,3));
console.log(calculator.divide(3,0));
console.log(calculator.multiply(4,5));