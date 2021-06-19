'use strict';

let leaderBoard = document.getElementById('leaderBoard');
let preFilledPlayers = [{ name: 'lucky', coins: 2 }];
let topFive = 0;

let getScores = JSON.parse(localStorage.getItem('playerScores'));
// console.log(getScores);
let playerData = getScores ? [...preFilledPlayers, ...getScores] : preFilledPlayers;

playerData.sort(function (a, b) {
  return b.coins - a.coins;
});
for (let i = 0; i < 5; i++){
  let li = document.createElement('li');
  li.textContent = `Player Name: ${playerData[i].name} Score: ${playerData[i].coins}`;
  leaderBoard.appendChild(li);
}
