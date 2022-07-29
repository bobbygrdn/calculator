
// This is where all the containers are queried
const num = document.querySelector('.numbersContainer');
const operand = document.querySelector('.operandContainer');
const display = document.querySelector('.display');

// This is where all the logic operands and numbers are queried
const plus = document.querySelector('.plus');
const equal = document.querySelector('.equal');
const subtract = document.querySelector('.subtract');
const numbers = document.querySelector('.numbers');
const clear = document.querySelector('.clear')

// This is where all the event listeners for each button are added
plus.addEventListener('click', () =>{
    testCalculator.add();
})

equal.addEventListener('click', () => {
    testCalculator.equal();
})

subtract.addEventListener('click', () => {
    testCalculator.minus();
})

numbers.addEventListener('click', () => {
    testCalculator.numbers();
})

clear.addEventListener('click', () => {
    testCalculator.clear();
})

// Calculator class creation setting the initial state of calc, history and logicOperand to null; 
class Calculator  {
    constructor() {
        let calc = [];
        let history = [];
        let logicOperand = [];
    }
    
    // Method to update the display with the number that is clicked
    numbers(e) {
        display += e.target.innerText;
    }

    // Methods to select what the current operand will be
    add() {
        calc.push(display.innerText);
        logicOperand = '+';
        display.innerText = '';
    }

    minus() {
        calc.push(display.innerText);
        logicOperand = '-';
        display.innerText = '';
    }

    // Method that runs the logical operations based off what numbers are in the array and what operand is selected
    enter() {
        // Pushes the current selection of numbers into the next index of the calc array
        calc.push(display.innerText);
        const initialValue = 0;

        // Checks the logicOperand and performs actions for which one is true
        if(logicOperand === '+') {
            calc.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
        }

        if(logicOperand === '-') {
            calc.reduce((previousValue, currentValue) => 
                previousValue - currentValue, initialValue)
        }

        // Sets the display to the solved answer and adds that answer to the history of the calculator
        display.innerText = initialValue;
        history.push(display.innerText);
    }

    // Method that clears the display and calc container upon clicking the clear button
    clear() {
        calc = [];
        display.innerText = '';
    }

}

/* Creating a new instance of the Calculator class. */
const testCalculator = new Calculator();
