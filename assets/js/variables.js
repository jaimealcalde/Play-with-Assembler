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
    time: 120,
  },
  {
    username: "Tam",
    movements: 15,
    time: 110,
  },
  {
    username: "Marc",
    movements: 12,
    time: 150,
  },
  {
    username: "Pere",
    movements: 30,
    time: 130,
  }
];


/**
 * Variables of the DOM
 */
var main = document.querySelector(".main"); // access the main section
var positionMain = 0; // position of main to move the sections
var headerExtra = document.querySelector(".header__extra"); // access extra information on header
var containerRanking = document.querySelector(".container-ranking");
