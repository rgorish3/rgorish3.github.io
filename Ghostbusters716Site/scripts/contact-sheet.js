const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const orgInput=document.querySelector('#organization');
const emailInput=document.querySelector('#email');
const messageInput=document.querySelector('#message');
const msg=document.querySelector('#msg');

const emailValidationRE=/\S+@\S+\.\S+/;

myForm.addEventListener('submit',onSubmit);


function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || messageInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML='Missing Required Fields';
    }
    else if(!emailInput.value.match(emailValidationRE)){
        msg.classList.add('error');
        msg.innerHTML='Invalid Email Address';
    }
    else{
        msg.classList.remove('error');
        msg.innerHTML='Message Sent!';
        myForm.remove();
    }
}