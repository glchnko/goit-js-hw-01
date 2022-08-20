const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input' , (onSizeChange))

function onSizeChange (event) {
  textEl.style.fontSize = `${event.target.value}px`;
}