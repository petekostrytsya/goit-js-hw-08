import throttle from 'lodash.throttle'; 


const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const allData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormData(event) {
    allData[event.target.name] = event.target.value;   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function onFormSubmit(event) {
    event.preventDefault();    
    localStorage.removeItem(STORAGE_KEY);
    const allElements = event.currentTarget.elements;
    const formAll = {
        email: allElements.email.value,
        password: allElements.message.value,
    };
    console.log(formAll);
    event.currentTarget.reset();
};

function populateAllData() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data.email) {
      email.value = data.email;
    };
    if (data.message) {
      message.value = data.message;
    };
};
populateAllData();
















// ========================================\\


// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// const localKey = 'feedback-form-state';

// form.addEventListener('input', throttle(evt => {
//     const storedValue = { email: email.value, message: message.value };
//     localStorage.setItem(localKey, JSON.stringify(storedValue));
//   }, 500)
// );

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log({ email: email.value, message: message.value });
//   form.reset();
//   localStorage.removeItem(localKey);
// });

// function fn(storedValue) {
//   try {
//     if (storedValue !== null) {
//       const parseValue = JSON.parse(storedValue);
//       email.value = parseValue.email;
//       message.value = parseValue.message;
//     }
//   } catch (err) {
//     console.error('Get state error: ', err.message);
//   }
// };

// fn(localStorage.getItem(localKey));