'use strict';

/**
 * Start game
 */
function startGame() {
  setInterval(setTime, 1000);
  moveMainSection();

  console.log('yes');
  setTimeout(flipAllCards, 3000);
}

/**
 * Move between sections
 */
function moveMainSection() {
  // var positionMain;
  positionMain -= 100;
  main.style.transform = "translateX(" + positionMain + "%)";
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
  cards.forEach(card => {
    card.classList.remove('flip');
  });

  firstCard = undefined;
  secondCard = undefined;
}

/**
 *  Open card
 */
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
    totalSeconds = 0;
    setTimeout(moveMainSection, 1000);
    console.log(user)
    addUserList();
    sortPlayers();
    showRanking();
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
  if (secondCard) return null

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
    card.classList.remove('flip');
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
}

var usersList;
function sortPlayers() {
  usersList = users.sort((a, b) => {
    if (a.time != b.time && a.attempts != b.attempts) {
      return a.time - b.time;
    } else if (a.time === b.time && a.attempts != b.attempts) {
      return a.attempts - b.attempts;
    }
  });
}

// Show ranking of players 
function showRanking() {
  if (usersList.length != 0) {

    var html = `
    <table class="table">
      <tr class="table__row">
        <th class="table__header">Name</th>
        <th class="table__header">Time</th>
        <th class="table__header"> Attempts</th>
      </tr>`

    for (var i = 0; i < usersList.length; i++) {
      html +=
        `<tr class="table__row">
        <td class="table__cell">${usersList[i].username}</td>
        <td class="table__cell">${usersList[i].time}</td>
        <td class="table__cell">${usersList[i].attempts}</td>
      </tr>`
    };

    html += `</table>`

    containerRanking.innerHTML = html;
  }
}
