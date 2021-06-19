'use strict';

let spinsRemaining = 4;
let coins = 12;
let gameOver = 0;
let userBet = 3;
let firstReel = document.getElementById('firstReel');
let secondReel = document.getElementById('secondReel');
let thirdReel = document.getElementById('thirdReel');
let spinButton = document.getElementById('spinButton');
// let betButton = document.getElementById('betButton');
// let formName = document.getElementById('modalSubmit');

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
if (!getScores) {
  new Player('Heather', coins);
  new Player('Phil', coins);
  new Player('Taylor', coins);
  new Player('Ryan', coins);
  new Player('Chris', coins);
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
  // console.log(allReels.length);
  while (allReels.length < 3) {
    let selectedImage = selectRandomImage();
    allReels.push(selectedImage);
  }
  firstReel.src = ReelImagesArray[allReels[0]].src;
  secondReel.src = ReelImagesArray[allReels[1]].src;
  thirdReel.src = ReelImagesArray[allReels[2]].src;
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
  if (gameOver === coins) {
    betButton.removeEventListener('click', handleBetClick);
  }
  if (spinsRemaining === 0) {
    spinButton.removeEventListener('click', handleSpinClick);
    playerData[0].coins = coins;
    let stringifiedPlayerData = JSON.stringify(playerData);
    localStorage.setItem('playerScores', stringifiedPlayerData);
  }
}

// Spin adds points but does not subtract point and bet only subtracts points

// function handleBetClick(event) {
//   let betClicked = event.target.alt;
//   coins -= 3;
//   console.log(coins);
//   creditAmount();
// }
creditAmount();
spinButton.addEventListener('click', handleSpinClick);
// betButton.addEventListener('click', handleBetClick);
