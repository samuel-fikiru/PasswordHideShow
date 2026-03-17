console.log('Hello')

const password = document.querySelector('.js-password-input');
console.log(password.value)

password.addEventListener('onkeydown', (event)=>{
    if (event.key === 'Enter'){
        console.log(event)
    }
})

const hiButton = document.querySelector('.hiButton');
hiButton.addEventListener('onkeydown', (event)=>{
    console.log(event);
})