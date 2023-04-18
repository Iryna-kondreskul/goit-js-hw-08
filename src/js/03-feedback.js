import throttle from 'lodash.throttle'

const STORAGE_REY = 'feedback-form-state';

 const formData = {};

const refs ={
    form:document.querySelector('.feedback-form'),
    textarea:document.querySelector('textarea'),
    input:document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTexteriaInput, 500));
refs.input.addEventListener('input', throttle(onTexteriaInput, 500));

refs.form.addEventListener('input', e => {
     formData[e.target.name] = e.target.value;
     console.log(formData);
});


textareaPop();


function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');

 //метод который очищает форму
 evt.currentTarget.reset();

 localStorage.removeItem('STORAGE_REY');
}

function onTexteriaInput(evt) {
     //   const message = evt.target.value;
     //   console.log(message);
     //  localStorage.setItem('STORAGE_REY', message);
     
     
     const infoUser = JSON.stringify(formData);
     //console.log(infoUser);
     localStorage.setItem('STORAGE_REY', infoUser);
}

function textareaPop() {
  const saveMessage = localStorage.getItem('STORAGE_REY');

    if(saveMessage){
         console.log(saveMessage);
         refs.textarea.value = saveMessage;
     }
   
}

