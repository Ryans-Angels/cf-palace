'use strict';

// Setting variables and entries into DOM
let spinsRemaining = 10;
let coins = 10000;
let userBet = 100;
let firstReel = document.getElementById('firstReel');
let secondReel = document.getElementById('secondReel');
let thirdReel = document.getElementById('thirdReel');
let spinButton = document.getElementById('spinButton');
let modalForm = document.getElementById('modal-form');
let modal = document.getElementById('modal');
let modalOver = document.getElementById('modal-over');
let gameOver = document.getElementById('game-over');
let ReelImagesArray = [];
let allReels = [];
let playerData = [];
let sortedScores = playerData;
let getScores = localStorage.getItem('playerScores');
let coinInsert = new Audio('sounds/coin-insert.wav');
let win = new Audio('/sounds/win.mp3');
let jackpot = new Audio('/sounds/jackpot.wav');

// Parses data from local storage
playerData = getScores ? JSON.parse(getScores) : [];

// Constructor for players
function Player(name, coins) {
  this.name = name;
  this.coins = coins;
  playerData.unshift(this);
}

// Pushes the images for the reels into array
function ReelImages(name, fileExtension = 'jpg') {
  this.src = `img/${name}.${fileExtension}`;
  ReelImagesArray.push(this);
}

// New images that are instantiated for Reels
new ReelImages('brook', 'png');
new ReelImages('jeff');
new ReelImages('Joe', 'jpeg');
new ReelImages('john', 'png');
new ReelImages('Ryan');
new ReelImages('lucky-goat');

// Selects random image number for images in Reels array
function selectRandomImage() {
  return Math.floor(Math.random() * ReelImagesArray.length);
}

// Renders 3 images and pushes into the [0-2] spots of Reels array index
function renderRandomImage() {
  while (allReels.length < 3) {
    let selectedImage = selectRandomImage();
    allReels.push(selectedImage);
  }
  firstReel.src = ReelImagesArray[allReels[0]].src;
  secondReel.src = ReelImagesArray[allReels[1]].src;
  thirdReel.src = ReelImagesArray[allReels[2]].src;
}

// When submit button on Age/Name Modal is clicked display is switched to hidden again. The name in the form is assigned as submittedName and a new Player is instantiated.
function submitModal(event) {
  event.preventDefault();
  modal.style.display = 'none';
  let submittedName = event.target.name.value;
  new Player(submittedName, coins);
}

// Displays the amount of credits left

function creditAmount() {
  let credits = document.getElementById('credits');
  credits.textContent = `Credits: \n ${coins}`;
}

// Logic to determine if reel values are winners. 2 images are a small win and 3 images are a big win. Adds the win amounts to credits. Then uses creditAmount function.
//*** Stretch Goal *** Set up a legend to assign values to different sets of image wins like in a real slot machine.
function winnerWinner() {
  if (allReels[0] === allReels[1] &&
    allReels[0] === allReels[2]) {
    coins += userBet * 3;
    playJackpotWinAudio();
  }
  else if (allReels[0] === allReels[1] ||
    allReels[0] === allReels[2] ||
    allReels[1] === allReels[2]) {
    coins += userBet * 2;
    playSmallWinAudio();
  }
  creditAmount();
}

// When spinsRemaining === 0 or coins === 0 Game Over Modal display is switched to block to allow access to High Rollers page.
function displayGameOver() {
  gameOver.style.display = 'block';
}

// Audio for wins and betting
function playCoinAudio () {
  coinInsert.play();
}

function playSmallWinAudio () {
  win.play();
}

function playJackpotWinAudio () {
  jackpot.play();
}

// This will run X number of times based on the spins remaining variable
function handleSpinClick(event) {
  allReels = [];
  let spinClicked = event.target.alt;
  spinsRemaining--;
  coins -= 100;
  renderRandomImage();
  playCoinAudio();
  creditAmount();
  winnerWinner();
  if (spinsRemaining === 0 || coins === 0) {
    spinButton.removeEventListener('click', handleSpinClick);
    playerData[0].coins = coins;
    displayGameOver();
    let stringifiedPlayerData = JSON.stringify(playerData);
    localStorage.setItem('playerScores', stringifiedPlayerData);
  }
}

// This displays the starting amount of coins on load
creditAmount();

// Event listeners for age modal, spin button
modalForm.addEventListener('submit', submitModal);
spinButton.addEventListener('click', handleSpinClick);
modalOver.addEventListener('submit', displayGameOver);
