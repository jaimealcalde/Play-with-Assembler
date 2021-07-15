"use strict";

/**
 * All cards
 */
const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.addEventListener("click", flipCard));

/**
 * Start game
 */
function startGame() {
  if (!executed) {
    setInterval(setTime, 1000);
    executed = true;
  }
  totalSeconds = 0;

  printUsername()
  moveMainSection();

  shuffleCards();
  restartBoard();

  addFlipToAllCards();
  setTimeout(removeFlipToAllCards, 3000);
}

/**
 * Print username in screen
 */
function printUsername() {
  let usernameDOM = document.getElementById('label-username');
  usernameDOM.innerHTML = user.username;
}

/**
 * Move between sections
 */
function moveMainSection() {
  positionMain -= 100;
  main.style.transform = "translateX(" + positionMain + "%)";
}

/**
 *  Remove flip to all cards
 */
function removeFlipToAllCards() {
  cards.forEach((card) => {
    card.classList.remove("flip");
  });

  firstCard = undefined;
  secondCard = undefined;
}

/**
 *  Add flip to all cards
 */
function addFlipToAllCards() {
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
  removeFlipToAllCards();

  endGame();
}

/**
 *  End game
 */
function endGame() {
  if (arrayCards.length === 8) {
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
    setTimeout(removeFlipToAllCards, 1000);
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