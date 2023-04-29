import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');

const STORAGE_REY = 'feedback-form-state';

 const formData = {};


form.addEventListener('input', throttle(onFormDate, 500));
form.addEventListener('submit', onFormSubmit);
// onInfoFormLocaleStorage();

function onFormSubmit(evt) {
     console.log(JSON.parse(localStorage.getItem('STORAGE_REY')));
     evt.preventDefault();
        
    //метод который очищает форму
    evt.currentTarget.reset();
   
    localStorage.removeItem('STORAGE_REY');
   }

function onFormDate(evt) {
     formData[evt.target.name] = evt.target.value;
     console.log(formData);
     localStorage.setItem('STORAGE_REY', JSON.stringify(formData));
}

(function onInfoFormLocaleStorage(evt){
     const saveMessage = JSON.parse(localStorage.getItem('STORAGE_REY'));
     const email = document.querySelector('.feedback-form input');
     const message = document.querySelector('.feedback-form textarea');

     if(saveMessage){
          email.value = saveMessage.email;
          message.value = saveMessage.message;
     }
})();