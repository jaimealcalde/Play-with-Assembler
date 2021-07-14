'use strict';

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function startGame() {
  setInterval(setTime, 1000);
  moveMainSection();
  setTimeout(flipAllCards, 3000);
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

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));

var firstCard, secondCard;
var movements = 0;
var arrayCards = []

function removeFlipCard(params) {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  firstCard = undefined;
  secondCard = undefined;
}

function openedCard() {
  arrayCards.push(firstCard);
  firstCard.classList.add('open');
  secondCard.classList.add('open');
  removeFlipCard()

  endGame()
}

/**
 *  End game
 */
function endGame() {
  if (arrayCards.length === 1) {
    user['attempts'] = movements;
    user['time'] = totalSeconds;
    setTimeout(moveMainSection, 1000);
    console.log(user)
  }
}

/**
 *  Check for match
 */
function checkForMatch() {
  if (firstCard.dataset.name != secondCard.dataset.name) {
    movements++;
    setTimeout(removeFlipCard, 1000);
  }

  if (firstCard.dataset.name === secondCard.dataset.name) {
    openedCard();
  }
}

/**
 *  Flip card
 */
function flipCard() {
  if (this.classList.contains('open')) return null
  if (this.classList.contains('flip')) return null

  this.classList.add('flip');

  if (!firstCard) return firstCard = this;

  secondCard = this;

  checkForMatch();
}

/**
 *  Flip all cards
 */
function flipAllCards() {
  cards.forEach(card => {
    card.classList.remove('open');
  });
}

/**
 *  Shuffle cards
 */
(function shuffleCards() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 16);
    card.style.order = ramdomPos;
  });
})();
/**
 *  Ranking
 */

// Everytime a player finishes his game, his info will be save to the list
function addUserList() {
  users.push(user);
  console.log(users)
}

// users.sort((a, b) => {return a.time - b.time });
function ranking() {
  var userList = users.sort((a, b) => { 
    if (a.time != b.time && a.attempts != b.attempts) {
      return a.time - b.time; 
    } else if (a.time == b.time && a.attempts != b.attempts) {
      return a.attempts - b.attempts; 
    } else if (a.time == b.time && a.attempts == b.attempts) {
      return a.username.toLowerCase() - b.username.toLowerCase(); 
    }
  });

  if (userList.length != 0) {
    containerRanking.innerHTML = `
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Time</th>
        <th>Attempts</th>
      </tr>`

    for (var i = 0; i < userList.length; i++) {
      containerRanking.innerHTML +=
        `<tr>
        <td>${userList[i].username}</td>
        <td>${userList[i].time}</td>
        <td>${userList[i].attempts}</td>
      </tr><br>`
    };

    containerRanking.innerHTML += `</table>`
  }
}
