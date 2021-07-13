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
var headerExtra = document.querySelector(".header__extra"); // access extra information on header
var positionMain = 0;