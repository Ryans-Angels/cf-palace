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
// let renderQ = [];
let allReels = [];

// Constructor for 
function Player(name, score) {
  this.name = name;
  this.score = score;
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
// renderRandomImage();
// console.log(allReels);
// firstReel.alt = ReelImagesArray[firstReel].name;



function handleSpinClick(event) {
  allReels = [];
  let spinClicked = event.target.alt;
  spinsRemaining --;
  renderRandomImage();
  if (spinsRemaining === 0) {
    spinButton.removeEventListener('click', handleSpinClick);
  }
  console.log(spinsRemaining);
  console.log(allReels);
}

function handleBetClick(event) {
  let betClicked = event.target.alt;
  coins--;
  console.log(coins);

  if (gameOver === coins) {
    betButton.removeEventListener('click', handleBetClick);
  }
}
spinButton.addEventListener('click', handleSpinClick);
betButton.addEventListener('click', handleBetClick);
