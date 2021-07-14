'use strict';

/**
 * Form validator
 */

class FormValidator {
  constructor(form, fields) {
    this.form = form
    this.fields = fields
  }

  initialize() {
    this.validateOnEntry()
    this.validateOnSubmit()
  }

  validateOnSubmit() {
    let self = this;

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      self.fields.forEach(field => {
        const input = document.querySelector(`#${field}`);
        self.validateFields(input);
        user[`${field}`] = input.value;
      });

      startGame()
    });

  }

  validateOnEntry() {
    let self = this;
    this.fields.forEach(field => {
      const input = document.querySelector(`#${field}`);
      input.addEventListener('input', event => {
        self.validateFields(input);
      })
    })
  }

  validateFields(field) {

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

  setStatus(field, message, status) {
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
}

const form = document.querySelector('.form')
const fields = ["username"]

const validator = new FormValidator(form, fields)
validator.initialize()