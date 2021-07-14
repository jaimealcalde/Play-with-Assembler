'use strict'

/**
 * User Global Variable
 */
var user = {
  username: '',
  attempts: '',
  time: ''
};

/**
 * Users Array
 */
var users = [
  {
    username: "A",
    attempts: 20,
    time: 10,
  },
  {
    username: "B",
    attempts: 20,
    time: 10,
  },
  {
    username: "C",
    attempts: 25,
    time: 10,
  }
];


/**
 * Variables of the DOM
 */
var main = document.querySelector(".main"); // access the main section
var positionMain = 0; // position of main to move the sections
var headerExtra = document.querySelector(".header__extra"); // access extra information on header
var containerRanking = document.querySelector(".container-ranking");
