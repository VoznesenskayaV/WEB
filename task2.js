function calculate(operation) {
    const num1Input = document.getElementById('num1').value.trim();
    const num2Input = document.getElementById('num2').value.trim();
    const errorMessage = document.getElementById('error-message');
    const resultDisplay = document.getElementById('result');
    let result;

    errorMessage.textContent = '';

    if (!num1Input || !num2Input) {
        errorMessage.textContent = 'Оба поля должны быть заполнены.';
        return;
    }

    if (isNaN(num1Input) || isNaN(num2Input)) {
        errorMessage.textContent = 'Пожалуйста, вводите только числа.';
        return;
    }

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorMessage.textContent = 'На ноль делить нельзя.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorMessage.textContent = 'Неизвестная операция.';
            return;
    }

    resultDisplay.innerText = result;
}

document.getElementById('addBtn').addEventListener('click', () => calculate('add'));
document.getElementById('subtractBtn').addEventListener('click', () => calculate('subtract'));
document.getElementById('multiplyBtn').addEventListener('click', () => calculate('multiply'));
document.getElementById('divideBtn').addEventListener('click', () => calculate('divide'));
