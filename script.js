document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '=') {
                display.value = eval(display.value);
            } else if (button.textContent === 'C') {
                display.value = '';
            } else {
                display.value += button.textContent;
            }
        });
    });
});
