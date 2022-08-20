let counterValue = 0;

const displayCounter = document.querySelector('#value');
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');


btnMinus.addEventListener('click' , () => {
    counterValue--
    displayCounter.textContent = counterValue
})

btnPlus.addEventListener('click' , () => {
    counterValue++
    displayCounter.textContent = counterValue
})
