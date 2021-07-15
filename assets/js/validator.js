/**
 * Validate on submit
 */
function validateOnSubmit(e) {
  e.preventDefault();

  // set the username in the user object
  field = "username";
  user[`${field}`] = document.querySelector(`#${field}`).value;

  // start the game
  startGame();
}

/**
 * Validate on entry
 */
function validateOnEntry() {
  let self = this;
  field = "username";
  const input = document.querySelector(`#${field}`);

  self.addEventListener('input', e => {
    e.preventDefault();

    validateFields(input);
  })
}

/**
 * Validate fields
 */
function validateFields(field) {
  // Check maxlength
  if (field.value.length > 20) {
    this.setStatus(field, `${field.previousElementSibling.innerText} cannot have more than 20 characters`, "error")
  } else {
    this.setStatus(field, null, "success")
  }

  // Check minlength
  if (field.value.length < 8) {
    this.setStatus(field, `${field.previousElementSibling.innerText} cannot have less than 8 characters`, "error")
  } else {
    this.setStatus(field, null, "success")
  }
}

/**
 * Messages
 */
function setStatus(field, message, status) {
  const successIcon = field.parentElement.querySelector('.icon-success')
  const errorIcon = field.parentElement.querySelector('.icon-error')
  const errorMessage = field.parentElement.querySelector('.form__error-message')

  if (status === "success") {
    if (errorIcon) { errorIcon.classList.add('hidden') }
    if (errorMessage) { errorMessage.innerText = "" }
    successIcon.classList.remove('hidden')
    field.classList.remove('input-error')
  }

  if (status === "error") {
    if (successIcon) { successIcon.classList.add('hidden') }
    field.parentElement.querySelector('.form__error-message').innerText = message
    errorIcon.classList.remove('hidden')
    field.classList.add('input-error')
  }
}

/**
 * Get query Selectors
 */
const form = document.querySelector('.form');
const username = document.querySelector('#username');
const validator = new FormData(form);

/**
 * Event listeners
 */
username.addEventListener('keydown', validateOnEntry);
form.addEventListener('submit', validateOnSubmit);
