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
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);
    
    case 'x':
      return multiply(a, b);

    case '/':
      return divide(a, b);
  }
}

function backspace() {
  curValue = curValue.slice(0, -1);
  bottomScreen.textContent = `${curValue}`;
}

function clear() {
  curValue = '';
  curOperator = '';
  upperScreen.textContent = '';
  bottomScreen.textContent = '';
  curOperator = '';
  operatorPressed = false;
  displayResult = false;
  pointButton.disabled = false;
  secondValue = 0;
  firstValue = 0;
}

function numberClick(n) {
  if (operatorPressed === true) {
    displayResult = true;
  }
  curValue += n;
  bottomScreen.textContent += n;
}

function operatorClick() {
  pointButton.disabled = false;
  if (operatorPressed === false) {
    // Operator wasn't pressed
    firstValue = Number(curValue);
    upperScreen.textContent = `${firstValue} ${curOperator}`;
    operatorPressed = true;
    curValue = '';
    bottomScreen.textContent = '';

  } else if (operatorPressed === true && displayResult === false) {
    // Operator pressed but the second number wasn't pressed yet
    upperScreen.textContent = `${firstValue} ${curOperator}`;
  }
}

function equalsClick() {
  if (operatorPressed === true && displayResult === true) {
    // Operator pressed and second number also pressed
    if (secondValue !== '') {
      secondValue = Number(curValue);
      firstValue = operate(firstValue, secondValue, curOperator);
      upperScreen.textContent = `${firstValue} ${curOperator}`;
      curValue = '';
      bottomScreen.textContent = '';
      pointButton.disabled = false;
    }
  } 
}

function pointClick() {
  curValue += '.';
  bottomScreen.textContent = curValue;
}

function changeSign() {
  aux = Number(curValue);
  aux *= -1;
  curValue = aux.toString();
  bottomScreen.textContent = curValue;
}
/* --------- */

/* Aux variables */
let curValue = '';
let curOperator = '';
let firstValue = 0;
let secondValue = 0;
let operatorPressed = false;
let displayResult = false;
/* --------- */

/* Calculator screens */
const upperScreen = document.querySelector('.upper-screen');
const bottomScreen = document.querySelector('.bottom-screen');
/* --------- */

/* Misc buttons */
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', backspace);

const changeSignButton = document.querySelector('.sign-change');
changeSignButton.addEventListener('click', changeSign);

const pointButton = document.querySelector('.point')
pointButton.addEventListener('click', (event) => {
  pointClick();
  event.target.disabled = true;
});
/* --------- */

/* Operator buttons */
const plusSign = document.querySelector('.plus');
plusSign.addEventListener('click', () => {
  equalsClick();
  curOperator = '+';
  operatorClick();
});

const minusSign = document.querySelector('.minus');
minusSign.addEventListener('click', () => {
  equalsClick();
  curOperator = '-';
  operatorClick();
});

const multiplySign = document.querySelector('.multiply');
multiplySign.addEventListener('click', () => {
  equalsClick();
  curOperator = 'x';
  operatorClick();
});

const divideSign = document.querySelector('.divide')
divideSign.addEventListener('click', () => {
  equalsClick();
  curOperator = '/';
  operatorClick();
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', equalsClick);
/* --------- */


/* Number buttons */
const number9 = document.querySelector('.nine');
number9.addEventListener('click', () => numberClick('9'));

const number8 = document.querySelector('.eight');
number8.addEventListener('click', () => numberClick('8'));

const number7 = document.querySelector('.seven');
number7.addEventListener('click', () => numberClick('7'));

const number6 = document.querySelector('.six');
number6.addEventListener('click', () => numberClick('6'));

const number5 = document.querySelector('.five');
number5.addEventListener('click', () => numberClick('5'));

const number4 = document.querySelector('.four');
number4.addEventListener('click', () => numberClick('4'));

const number3 = document.querySelector('.three');
number3.addEventListener('click', () => numberClick('3'));

const number2 = document.querySelector('.two');
number2.addEventListener('click', () => numberClick('2'));

const number1 = document.querySelector('.one');
number1.addEventListener('click', () => numberClick('1'));

const number0 = document.querySelector('.zero');
number0.addEventListener('click', () => numberClick('0'));
/* --------- */
