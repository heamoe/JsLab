function checkMultipleOfFive() {
    const number = prompt("Enter a number:");
    const parsedNumber = parseInt(number);
    
    if (isNaN(parsedNumber)) {
        document.getElementById('multipleOfFiveResult').textContent = "Invalid input. Please enter a number.";
    } else {
        const isMultipleOfFive = parsedNumber % 5 === 0;
        const result = isMultipleOfFive ? "is" : "is not";
        document.getElementById('multipleOfFiveResult').textContent = `${parsedNumber} ${result} a multiple of 5.`;
    }
}

function calculateGrade() {
    const score = parseInt(document.getElementById('score').value);
    let grade;

    if (score >= 80 && score <= 100) {
        grade = 'A';
    } else if (score >= 70 && score <= 89) {
        grade = 'B';
    } else if (score >= 60 && score <= 69) {
        grade = 'C';
    } else if (score >= 50 && score <= 59) {
        grade = 'D';
    } else if (score >= 0 && score <= 49) {
        grade = 'F';
    } else {
        grade = 'Invalid score';
    }

    document.getElementById('result').textContent = `Grade: ${grade}`;
}

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Error: Invalid operator';
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const result = calculator(num1, num2, operator);
    document.getElementById('calculatorResult').textContent = `Result: ${result}`;
}

function fizzBuzz() {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz ';
        } else if (i % 3 === 0) {
            result += 'Fizz ';
        } else if (i % 5 === 0) {
            result += 'Buzz ';
        } else {
            result += i + ' ';
        }
    }
    document.getElementById('fizzBuzzResult').textContent = result;
}