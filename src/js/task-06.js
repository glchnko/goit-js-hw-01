const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener('blur' , event => {
    if (event.target.value.length === inputTextEl.getAttribute('data-length')){
        inputTextEl.classList.add('valid')
        if(inputTextEl.classList.contains('invalid')){
            inputTextEl.classList.remove('invalid')
        }
       
    } else{
        if(inputTextEl.classList.contains('valid')){
            inputTextEl.classList.remove('valid')
        }
        inputTextEl.classList.add('invalid')
    }
        
    
     
})

