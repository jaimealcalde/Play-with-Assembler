"use strict";

/**
 * Start game
 */

var executed = false;

function startGame() {
  if (!executed) {
    setInterval(setTime, 1000);
    executed = true;
  }
  totalSeconds = 0;

  moveMainSection();

  shuffleCards();
  restartBoard();
  addFlipCard();

  setTimeout(flipAllCards, 3000);
}

/**
 * Move between sections
 */
function moveMainSection() {
  positionMain -= 100;
  main.style.transform = "translateX(" + positionMain + "%)";
}

// Stop the timeCounter once the user has matched all 16 cards
function stopTimeCounter() {
  clearInterval(time);
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.addEventListener("click", flipCard));

var firstCard, secondCard;
var movements = 0;
var arrayCards = [];

function removeFlipCard() {
  cards.forEach((card) => {
    card.classList.remove("flip");
  });

  firstCard = undefined;
  secondCard = undefined;
}

function addFlipCard() {
  cards.forEach((card) => {
    card.classList.add("flip");
  });
}

/**
 *  Open card
 */
function openedCard() {
  arrayCards.push(firstCard);
  firstCard.classList.add("open");
  secondCard.classList.add("open");
  removeFlipCard();

  endGame();
}

/**
 *  End game
 */
function endGame() {
  if (arrayCards.length === 1) {
    user["movements"] = movements;
    user["time"] = totalSeconds;
    totalSeconds = 0;
    setTimeout(moveMainSection, 1000);

    addUserToRanking();
    sortPlayers();
    showRanking();
  }
}

/**
 *  Check for match
 */
function checkForMatch() {
  if (firstCard.dataset.name != secondCard.dataset.name) {
    addMovement();
    setTimeout(removeFlipCard, 1000);
  }

  if (firstCard.dataset.name === secondCard.dataset.name) {
    addMovement();
    openedCard();
  }
}

/**
 *  Add movement
 */
function addMovement() {
  movements++;
  let movementsDOM = document.getElementById('movements');
  movementsDOM.innerHTML = movements;
}

/**
 *  Flip card
 */
function flipCard() {
  if (this.classList.contains("open")) return null;
  if (this.classList.contains("flip")) return null;
  if (secondCard) return null;

  this.classList.add("flip");

  if (!firstCard) return (firstCard = this);

  secondCard = this;

  checkForMatch();
}

/**
 *  Flip all cards
 */
function flipAllCards() {
  cards.forEach((card) => {
    card.classList.remove("flip");
  });
}

/**
 *  Restart Board
 */
function restartBoard() {
  cards.forEach((card) => {
    card.classList.remove("open");
  });
}

/**
 *  Shuffle cards
 */
function shuffleCards() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 16);
    card.style.order = ramdomPos;
  });
};

// Buttons

var userRanking = document.getElementById("userRanking");
var boardRanking = document.getElementById("boardRanking");
var boardRetry = document.getElementById("boardRetry");
var rankingRetry = document.getElementById("rankingRetry");

userRanking.addEventListener("click", moveToRanking);
boardRanking.addEventListener("click", moveToRanking);
boardRetry.addEventListener("click", retryGame);
rankingRetry.addEventListener("click", retryGame);

/**
 *  Retry game
 */
function retryGame() {
  positionMain = 0;
  main.style.transform = "translateX(" + positionMain + "%)";
  movements = 0;
  arrayCards = [];
  firstCard = undefined;
  secondCard = undefined;
  totalSeconds = 0;
  user = {
    username: '',
    movements: '',
    time: ''
  };
}

/**
 *  Move to ranking
 */
function moveToRanking() {
  sortPlayers();
  showRanking();
  positionMain = -200;
  main.style.transform = "translateX(" + positionMain + "%)";
}