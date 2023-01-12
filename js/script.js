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

let displayValue = 0;

const number9 = document.querySelector('.nine');
number9.addEventListener('click', () => {
  displayValue = 9;
  bottomScreen.textContent = displayValue
});

const number8 = document.querySelector('.eight');
number8.addEventListener('click', () => {
  displayValue = 8;
  bottomScreen.textContent = displayValue
});

const number7 = document.querySelector('.seven');
number7.addEventListener('click', () => {
  displayValue = 7;
  bottomScreen.textContent = displayValue
});

const number6 = document.querySelector('.six');
number6.addEventListener('click', () => {
  displayValue = 6;
  bottomScreen.textContent = displayValue
});

const number5 = document.querySelector('.five');
number5.addEventListener('click', () => {
  displayValue = 5;
  bottomScreen.textContent = displayValue
});

const number4 = document.querySelector('.four');
number4.addEventListener('click', () => {
  displayValue = 4;
  bottomScreen.textContent = displayValue
});

const number3 = document.querySelector('.three');
number3.addEventListener('click', () => {
  displayValue = 3;
  bottomScreen.textContent = displayValue
});

const number2 = document.querySelector('.two');
number2.addEventListener('click', () => {
  displayValue = 2;
  bottomScreen.textContent = displayValue
});

const number1 = document.querySelector('.one');
number1.addEventListener('click', () => {
  displayValue = 1;
  bottomScreen.textContent = displayValue
});

const number0 = document.querySelector('.zero');
number0.addEventListener('click', () => {
  displayValue = 0;
  bottomScreen.textContent = displayValue
});

const bottomScreen = document.querySelector('.bottom-screen');

