'use strict';

let scoreBoard = document.getElementById('scoreBoard');
let preFilledPLayers = [{ name: 'lucky', coins: 2 }];


let getScores = JSON.parse(localStorage.getItem('playerScores'));
// console.log(getScores);
let playerData = getScores ? [...preFilledPLayers, ...getScores] : preFilledPLayers;

playerData.sort(function (a, b) {
  return b.coins - a.coins;
});
console.log(playerData);
