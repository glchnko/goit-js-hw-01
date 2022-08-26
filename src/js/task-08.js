const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit' , onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    console.log(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;
     
    if(email === '' || password === ''){
        return console.log("Please fill in all the fields!");
    }
    
    console.log(`Email: ${email}  Password: ${password}`);
    
    event.target.reset();

}


// formEl.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset()
// }