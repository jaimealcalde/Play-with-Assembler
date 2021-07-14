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
var users = [];

/**
 * Variables of the DOM
 */
var main = document.querySelector(".main"); // access the main section
var positionMain = 0; // position of main to move the sections
var headerExtra = document.querySelector(".header__extra"); // access extra information on header
