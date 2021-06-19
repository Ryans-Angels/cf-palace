'use strict';

let spinsRemaining = 4;
let coins = 12;
let userBet = 3;
let firstReel = document.getElementById('firstReel');
let secondReel = document.getElementById('secondReel');
let thirdReel = document.getElementById('thirdReel');
let spinButton = document.getElementById('spinButton');
let modalForm = document.getElementById('modal-form');
let modal = document.getElementById('modal');

let ReelImagesArray = [];
let allReels = [];
let playerData = [];
let sortedScores = playerData;

let getScores = localStorage.getItem('playerScores');
//parses data from local storage
playerData = getScores ? JSON.parse(getScores) : [];

// Constructor for 
function Player(name, coins) {
  this.name = name;
  this.coins = coins;
  playerData.unshift(this);
}

function ReelImages(name, fileExtension = 'jpg') {
  this.src = `img/${name}.${fileExtension}`;
  ReelImagesArray.push(this);
}

new ReelImages('brook', 'png');
new ReelImages('jeff');
new ReelImages('Joe', 'jpeg');
new ReelImages('john', 'png');
new ReelImages('Ryan');
new ReelImages('lucky-goat');

// Selects random Image number
function selectRandomImage() {
  return Math.floor(Math.random() * ReelImagesArray.length);
}

// renders 3 images
function renderRandomImage() {
  while (allReels.length < 3) {
    let selectedImage = selectRandomImage();
    allReels.push(selectedImage);
  }
  firstReel.src = ReelImagesArray[allReels[0]].src;
  secondReel.src = ReelImagesArray[allReels[1]].src;
  thirdReel.src = ReelImagesArray[allReels[2]].src;
}
function submitModal(event) {
  event.preventDefault();
  modal.style.display = 'none';
  let submittedName = event.target.name.value;
  new Player (submittedName, coins);
}

function creditAmount() {
  let credits = document.getElementById('credits');
  credits.textContent = coins;
}

function winnerWinner() {
  if (allReels[0] === allReels[1] &&
    allReels[0] === allReels[2]) {
    coins += userBet * 3;
  }
  else if (allReels[0] === allReels[1] ||
    allReels[0] === allReels[2] ||
    allReels[1] === allReels[2]) {
    coins += userBet * 2;
  }
  creditAmount();
}

function handleSpinClick(event) {
  allReels = [];
  let spinClicked = event.target.alt;
  spinsRemaining--;
  coins -=3;
  renderRandomImage();
  creditAmount();
  winnerWinner();
  if (spinsRemaining === 0 || coins === 0) {
    spinButton.removeEventListener('click', handleSpinClick);
    playerData[0].coins = coins;
    let stringifiedPlayerData = JSON.stringify(playerData);
    localStorage.setItem('playerScores', stringifiedPlayerData);
  }
}

creditAmount();
modalForm.addEventListener('submit', submitModal);
spinButton.addEventListener('click', handleSpinClick);

