let count = 0;

const display = document.getElementById('counter')
const plusButton = document.getElementById('plusButton')
const minusButton = document.getElementById('minusButton')
const resetButton = document.getElementById('resetButton')

plusButton.addEventListener('click', () =>{
    count++;
    display.textContent = count;
});

minusButton.addEventListener('click', () =>{
    count--;
    display.textContent = count;
});

resetButton.addEventListener('click', () =>{
    count = 0;
    display.textContent = count;
});
