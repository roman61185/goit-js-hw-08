const throttle = require('lodash.throttle');

const nameEmailMessage = document.querySelector('.feedback-form');
const nameMail = nameEmailMessage.querySelector('input[name="email"]');
const nameMessage = nameEmailMessage.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = "feedback-form-state";

let info = {};

nameEmailMessage.addEventListener('input', throttle(collectInput, 500));

function collectInput(evt) {
    info[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(info));
    console.log(info);
}

// const savedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
// const parsedInfo = JSON.parse(savedInfo);
// nameMail.value = parsedInfo.email;
// nameMessage.value = parsedInfo.message;

addForm();
function addForm() {
    const savedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedInfo) {
        const parsedInfo = JSON.parse(savedInfo);
        nameMail.value = parsedInfo.email;
        nameMessage.value = parsedInfo.message;
    }
}


nameEmailMessage.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset(); //очищаем поля формы
    localStorage.removeItem(LOCALSTORAGE_KEY); //очищаем хранилище
}






















