let input = document.getElementById('input');

function clearInput() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function append(value) {
  input.value += value;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    alert('Invalid input');
  }
}
