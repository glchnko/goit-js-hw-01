const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener('blur' , event => {
    if (event.target.value.length === Number(event.currentTarget.dataset.length)){
        inputTextEl.classList.add('valid')
        if(inputTextEl.classList.contains('invalid')){
            inputTextEl.classList.remove('invalid')
        }
       
    } else{
        inputTextEl.classList.add('invalid')
    
        if(inputTextEl.classList.contains('valid')){
            inputTextEl.classList.remove('valid')
        }
       
    }   
    
     
})

