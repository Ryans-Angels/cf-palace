'use strict';

let spinsRemaining = 3;
let coins = 10;
let gameOver = 0;
let firstReel = document.getElementById('firstReel');
let secondReel = document.getElementById('secondReel');
let thirdReel = document.getElementById('thirdReel');
let spinButton = document.getElementById('spinButton');
let betButton = document.getElementById('betButton');
let ReelImagesArray = [];
let renderQ = [];

// Constructor for 
function Player (name, score) {
  this.name = name;
  this.score = score;
}

function ReelImages (name, fileExtension = 'jpg') {
  this.src = `img/${name}.${fileExtension}`;
  ReelImagesArray.push(this);
}

new ReelImages('brook', 'png');
new ReelImages('jeff');
new ReelImages('Joe', 'jpeg');
new ReelImages('john', 'png');
new ReelImages('Ryan');

// Selects random Image number
function selectRandomImage() {
  return Math.floor(Math.random() * ReelImagesArray.length);
}

// renders 3 images
function renderRandomImage() {
  while (ReelImagesArray.length < 3){
    selectRandomImage();
  }


  let reel1 = renderQ.pop();
  let reel2 = renderQ.pop();
  let reel3 = renderQ.pop();

  firstReel.src = ReelImagesArray[reel1].src;
  firstReel.alt = ReelImagesArray[reel1].name;

  secondReel.src = ReelImagesArray[reel2].src;
  secondReel.alt = ReelImagesArray[reel2].name;

  thirdReel.src = ReelImagesArray[reel3].src;
  thirdReel.alt = ReelImagesArray[reel3].name;
}

function handleSpinClick (event){
  let spinClicked = event.target.alt;
  renderRandomImage();
  spinsRemaining--;

  if (spinsRemaining === 0){
    spinButton.removeEventListener('click', handleSpinClick);
  }
}

function handleBetClick (event){
  let betClicked = event.target.alt;
  coins--;

  if (gameOver === coins){
    betButton.removeEventListener('click', handleBetClick);
  }
}
spinButton.addEventListener('click', handleSpinClick);
betButton.addEventListener('click', handleBetClick);
