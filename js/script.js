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