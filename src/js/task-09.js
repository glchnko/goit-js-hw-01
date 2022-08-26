function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const body = document.querySelector('body')

btnChangeColorEl.addEventListener('click' , onChangeColor )


function onChangeColor (event) {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorEl.textContent = newColor;
}