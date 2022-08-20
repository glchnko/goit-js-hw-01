const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input' , onInputChange )


function onInputChange (event){
   if(event.currentTarget.value === ''){
    outputEl.textContent = 'Anonymous'
     
     
   }
   outputEl.textContent = event.currentTarget.value
   
}