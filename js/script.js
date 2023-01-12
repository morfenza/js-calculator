/* Functions */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if ((a == 0) || (b == 0)) return NaN;
  return a / b;
}

function operate(a, b, func) {
  switch (func) {
    case 'add':
      return add(a, b);

    case 'subtract':
      return subtract(a, b);
    
    case 'multiply':
      return multiply(a, b);

    case 'divide':
      return divide(a, b);
  }
}

/* Aux variables */
let curValue = '';
let firstValue = 0;
let secondValue = 0;
let operatorPressed = false;
let displayResult = false;

/* Calculator screens */
const upperScreen = document.querySelector('.upper-screen');
const bottomScreen = document.querySelector('.bottom-screen');

/* Operator buttons */
const plusSign = document.querySelector('.plus');
plusSign.addEventListener('click', () => {
  if (operatorPressed === false) {
    // Operator wasn't pressed
    firstValue = Number(curValue);
    upperScreen.textContent = `${firstValue} + `;
    operatorPressed = true;

  } else if (operatorPressed === true && displayResult === false) {
    // Operator pressed but the second number wasn't pressed yet
    upperScreen.textContent = `${firstValue} + `;

  } else if (operatorPressed === true && displayResult === true) {
    // Operator pressed and second number also pressed
    if (secondValue !== '') {
      operate(firstValue, secondValue, '+');
      operatorPressed = false;
    } 
  }

});

const minusSign = document.querySelector('.minus');
minusSign.addEventListener('click', () => {
  if (operatorPressed === false) {
    // Operator wasn't pressed
    firstValue = Number(curValue);
    upperScreen.textContent = `${firstValue} - `;
    operatorPressed = true;

  } else if (operatorPressed === true && displayResult === false) {
    // Operator pressed but the second number wasn't pressed yet
    upperScreen.textContent = `${firstValue} - `;

  } else if (operatorPressed === true && displayResult === true) {
    // Operator pressed and second number also pressed
    if (secondValue !== '') {
      operate(firstValue, secondValue, '-');
      operatorPressed = false;
    } 
  }
});

const multiplySign = document.querySelector('.multiply');
multiplySign.addEventListener('click', () => {
  if (operatorPressed === false) {
    // Operator wasn't pressed
    firstValue = Number(curValue);
    upperScreen.textContent = `${firstValue} x `;
    operatorPressed = true;

  } else if (operatorPressed === true && displayResult === false) {
    // Operator pressed but the second number wasn't pressed yet
    upperScreen.textContent = `${firstValue} x `;

  } else if (operatorPressed === true && displayResult === true) {
    // Operator pressed and second number also pressed
    if (secondValue !== '') {
      operate(firstValue, secondValue, 'x');
      operatorPressed = false;
    } 
  }
});

const divideSign = document.querySelector('.divide')
divideSign.addEventListener('click', () => {
  if (operatorPressed === false) {
    // Operator wasn't pressed
    firstValue = Number(curValue);
    upperScreen.textContent = `${firstValue} / `;
    operatorPressed = true;

  } else if (operatorPressed === true && displayResult === false) {
    // Operator pressed but the second number wasn't pressed yet
    upperScreen.textContent = `${firstValue} / `;

  } else if (operatorPressed === true && displayResult === true) {
    // Operator pressed and second number also pressed
    if (secondValue !== '') {
      operate(firstValue, secondValue, '/');
      operatorPressed = false;
    } 
  }
});

const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {

});

/* Number buttons */
const number9 = document.querySelector('.nine');
number9.addEventListener('click', () => {
  curValue += '9';
  bottomScreen.textContent += '9'
});

const number8 = document.querySelector('.eight');
number8.addEventListener('click', () => {
  curValue += '8';
  bottomScreen.textContent += '8'
});

const number7 = document.querySelector('.seven');
number7.addEventListener('click', () => {
  curValue += '7';
  bottomScreen.textContent += '7'
});

const number6 = document.querySelector('.six');
number6.addEventListener('click', () => {
  curValue += '6';
  bottomScreen.textContent += '6'
});

const number5 = document.querySelector('.five');
number5.addEventListener('click', () => {
  curValue += '5';
  bottomScreen.textContent += '5'
});

const number4 = document.querySelector('.four');
number4.addEventListener('click', () => {
  curValue = '4';
  bottomScreen.textContent += '4'
});

const number3 = document.querySelector('.three');
number3.addEventListener('click', () => {
  curValue += '3';
  bottomScreen.textContent += '3'
});

const number2 = document.querySelector('.two');
number2.addEventListener('click', () => {
  curValue += '2';
  bottomScreen.textContent += '2'
});

const number1 = document.querySelector('.one');
number1.addEventListener('click', () => {
  curValue += '1';
  bottomScreen.textContent += '1'
});

const number0 = document.querySelector('.zero');
number0.addEventListener('click', () => {
  curValue += '0';
  bottomScreen.textContent += '0'
});

