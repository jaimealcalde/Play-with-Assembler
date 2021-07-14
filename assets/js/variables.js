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
    name: "A",
    attempts: 30,
    time: 40,
  },
  {
    name: "B",
    attempts: 20,
    time: 10,
  },
  {
    name: "C",
    attempts: 25,
    time: 30,
  }
];


/**
 * Variables of the DOM
 */
var main = document.querySelector(".main"); // access the main section
var positionMain = 0; // position of main to move the sections
var headerExtra = document.querySelector(".header__extra"); // access extra information on header
var containerRanking = document.querySelector(".container-ranking");
