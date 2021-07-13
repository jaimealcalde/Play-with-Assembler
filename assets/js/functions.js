'use strict';

function startGame() {

}

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

      moveMainSection();
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


/**
 * Move between sections
 */

function moveMainSection() {
  // var positionMain;
  positionMain -= 100;
  main.style.transform = "translateX(" + positionMain + "%)";

  // Start game
  if (positionMain === -100) {
    headerExtra.innerHTML = "You only have 1 minute";
  }

  // Player ranking
  if (positionMain === -200) {
    headerExtra.innerHTML = "Top Ranking";
  }
}

/**
 *  Time Counter
 */

var seconds = 0; // init variable for time counting, start at 0 
var time;

// The timer() function is invoked on the first card click
function timeCounter() {
  time = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      alert("Time out!");
      return;
    }
  }, 1000);
}

// Stop the timeCounter once the user has matched all 16 cards
function stopTimeCounter() {
  clearInterval(time);
}


/**
 *  Attempt Counter
 */
var attempts = 0;
function attemptCounter() {
  // increase the number of attempts for every pair checked
  attempts++;
}
