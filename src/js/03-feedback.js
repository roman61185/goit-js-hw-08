













const throttle = require('lodash.throttle');
const nameEmailMessage = document.querySelector('.feedback-form');
const nameMail = nameEmailMessage.querySelector('input[name="email"]');
const nameMessage = nameEmailMessage.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = "feedback-form-state";

let info = {};
addForm();

nameEmailMessage.addEventListener('input', throttle(collectInput, 500));
function collectInput(evt) {
    info[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(info));
    console.log(info);
}
function addForm() {
    const savedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedInfo = JSON.parse(savedInfo);
    if (parsedInfo) {

        nameMail.value = parsedInfo.email || "";
        nameMessage.value = parsedInfo.message || "";
        info.email = parsedInfo.email || "";
        info.message = parsedInfo.message || "";
    } return '';
}



nameEmailMessage.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();

    localStorage.removeItem(LOCALSTORAGE_KEY);

    evt.currentTarget.reset();
    console.log(info);

}











