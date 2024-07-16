function displayText() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('output');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = input;
    output.appendChild(newParagraph);
}



function swapValues() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    // Сохраняем значение первого инпута во временную переменную
    const temp = input1.value;

    // Меняем значения инпутов
    input1.value = input2.value;
    input2.value = temp;
}