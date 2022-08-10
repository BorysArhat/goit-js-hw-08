import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
const formData = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const dataParsed = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  if (email === '' || message === '') {
    return alert('Ви забули щось написати 😤');
  }
  console.log(dataParsed);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
function onInput({ target }) {
  formData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function setFormValues() {
  const grabedInfo = localStorage.getItem('feedback-form-state');
  console.log(grabedInfo);
  if (grabedInfo) {
    const data = JSON.parse(grabedInfo);
    if (data.email) {
      form.elements.email.value = data.email;
    }
    if (data.message) {
      form.elements.message.value = data.message;
    }
  }
}
setFormValues();
