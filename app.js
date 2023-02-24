function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = 'Введите числа';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            resultElement.innerText = 'Выберите оператор';
            return;
    }

    if (result > 10 || result < -10) {
        resultElement.innerText = 'Результат не может быть больше 10 или меньше -10';
    } else {
        resultElement.innerText = `Результат: ${result}`;
    }
}