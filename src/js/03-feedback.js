import throttle from 'lodash.throttle'; 

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formTextarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', throttle(onSubmit, 500));

function onSubmit(event) {
    event.preventDefault();
    
    const formData = {
        email: formInput.value,
        message: formTextarea.value,
    };
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    form.reset();
    }

window.addEventListener('load', () => {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formData) {
        formInput.value = formData.email;
        formTextarea.value = formData.message;
    }
}
);
