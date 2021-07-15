'use strict'

/**
 * User Global Variable
 */
var user = {
  username: '',
  movements: '',
  time: ''
};

/**
 * Users Array
 */
var users = [
  {
    username: "Jaime",
    movements: 20,
    time: 60,
  },
  {
    username: "Tam",
    movements: 15,
    time: 35,
  },
  {
    username: "Marc",
    movements: 12,
    time: 35,
  },
  {
    username: "Pere",
    movements: 25,
    time: 40,
  }
];

/**
 * Global variables
 */
var executed = false;
var firstCard, secondCard;
var movements = 0;
var arrayCards = [];

/**
 * Variables of the DOM
 */
var main = document.querySelector(".main"); // access the main section
var positionMain = 0; // position of main to move the sections
var containerRanking = document.querySelector(".container-ranking");
