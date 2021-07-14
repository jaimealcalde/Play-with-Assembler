'use strict';

/**
 * Start game
 */
function startGame() {
  setInterval(setTime, 1000);
  moveMainSection();
  setTimeout(flipAllCards, 3000);
}

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
  cards.forEach(card => {
    card.classList.remove('flip');
  });

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
  if (arrayCards.length === 8) {
    user['attempts'] = movements;
    user['time'] = totalSeconds;
    totalSeconds = 0;
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

  users.push();
}

function ranking() {
  var userList = users.sort((a, b) => { return a.time - b.time });
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
        <td>${userList[i].name}</td>
        <td>${userList[i].time}</td>
        <td>${userList[i].attempts}</td>
      </tr><br>`
    };

    containerRanking.innerHTML += `</table>`
  }
}
