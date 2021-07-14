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

const cards = document.querySelectorAll('.card'); 
var containerRanking = document.querySelector(".container-ranking");

/**
 * Deck
 */

let deck = [
  {
    id: 1,
    name: "Sapo",
    color: "#84CFFA",
    image: "https://image.flaticon.com/icons/svg/3069/3069170.svg",
    visible: true,
  },
  {
    id: 2,
    name: "Vaca",
    color: "#FA8484",
    image: "https://image.flaticon.com/icons/svg/3069/3069162.svg",
    visible: true,
  },
  {
    id: 3,
    name: "Canguru",
    color: "#E984FA",
    image: "https://image.flaticon.com/icons/svg/3069/3069163.svg",
    visible: true,
  },
  {
    id: 4,
    name: "Leão",
    color: "#84FAAC",
    image: "https://image.flaticon.com/icons/svg/3069/3069169.svg",
    visible: true,
  },
  {
    id: 5,
    name: "Pássaro",
    color: "#8684FA",
    image: "https://image.flaticon.com/icons/svg/3069/3069186.svg",
    visible: true,
  },
  {
    id: 6,
    name: "Elefante",
    color: "#F7FA84",
    image: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
    visible: true,
  },
];