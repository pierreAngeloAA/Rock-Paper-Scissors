let current = '';
let previous = '';
let operator = null;

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = current || '0';
}

function clear() {
  current = '';
  previous = '';
  operator = null;
  updateDisplay();
}

function backspace() {
  current = current.toString().slice(0, -1);
  updateDisplay();
}

function appendNumber(num) {
  if (num === '.' && current.includes('.')) return;
  current += num;
  updateDisplay();
}

function chooseOperator(op) {
  if (current === '') return;
  if (previous !== '') calculate();
  operator = op;
  previous = current;
  current = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
        current = "¡No dividas por cero!";
        previous = '';
        operator = null;
        updateDisplay();
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }

  current = Math.round(result * 1000) / 1000 + '';
  operator = null;
  previous = '';
  updateDisplay();
}

document.querySelectorAll('.num').forEach(btn => {
  btn.addEventListener('click', () => appendNumber(btn.textContent));
});

document.querySelectorAll('.operator').forEach(btn => {
  btn.addEventListener('click', () => chooseOperator(btn.dataset.op));
});

document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('backspace').addEventListener('click', backspace);
document.getElementById('decimal').addEventListener('click', () => appendNumber('.'));

updateDisplay();
