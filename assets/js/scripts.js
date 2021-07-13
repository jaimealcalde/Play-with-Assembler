'use strict';


/**
 * Start game
 */
function startGame() {

}


/**
 * Move between sections
 */
 var main = document.querySelector(".main"); // access the main section
 var headerExtra = document.querySelector(".header__extra"); // access extra information on header

function moveMainSection() {
    // var positionMain;
    let positionMain = -100;
    main.style.transform = "translateX(" + positionMain + "%)";

    // Start game
    if (positionMain === -100) {
        headerExtra.innerHTML = "You only have 1 minute";
        console.log(main.style.transform)
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
    time = setInterval(function() {
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



