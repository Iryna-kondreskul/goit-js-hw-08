import throttle from 'lodash.throttle'

const STORAGE_REY = 'feedback-form-state';

 const formData = {};

const refs ={
    form:document.querySelector('.feedback-form'),
    textarea:document.querySelector('textarea'),
    input:document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(evt => {
     formData[evt.target.name] = evt.target.value;
     console.log(formData);

     formInfo();
},500));


textareaPop();


function onFormSubmit(evt) {
  evt.preventDefault();
  
  console.log('Отправляем форму');

 //метод который очищает форму
 evt.currentTarget.reset();

 localStorage.removeItem('STORAGE_REY');
}


function formInfo() {
     const json = JSON.stringify(formData);
     localStorage.setItem('STORAGE_REY', json);
}

function textareaPop(e) {
  const saveMessage = localStorage.getItem('STORAGE_REY');
  const parseForm = JSON.parse(saveMessage);

  if(parseForm){
     console.log(parseForm);
     refs.input.value = parseForm.email;
     refs.textarea.value = parseForm.message;
   }    
}