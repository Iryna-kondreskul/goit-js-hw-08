import throttle from 'lodash.throttle'

const form = document.querySelector('form');
const STORAGE_REY = 'feedback-form-state';
let date = JSON.parse(localStorage.getItem(STORAGE_REY)) ?? {};

 form.addEventListener('submit', onSubmit);
 form.addEventListener('input', throttle(onInput, 500));
 
 
 function onSubmit(evt){
     evt.preventDefault();
     console.log(date);
     date = {};
     localStorage.removeItem(STORAGE_REY)
     evt.currentTarget.reset();

 }

 (function(){
     const {email, message} = form.elements;
     email.value = date.email || '';
     message.value = date.message || '';
 })();

 function onInput(evt){
    const {name, value} = evt.target;
    date[name] = value; 

    localStorage.setItem(STORAGE_REY, JSON.stringify(date));
 }
 

 

