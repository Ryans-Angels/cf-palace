'use strict';

let leaderBoard = document.getElementById('leaderBoard');
let preFilledPlayers = [
  { name: 'Lucky The Dog', coins: 999 },
  { name: 'Taylor', coins: 2 },
  { name: 'Heather', coins: 1 },
  { name: 'Phil', coins: 0 },
  { name: 'Ryan', coins: 4 }
];

let getScores = JSON.parse(localStorage.getItem('playerScores'));

let playerData = getScores ? [...preFilledPlayers, ...getScores] : preFilledPlayers;

playerData.sort(function (a, b) {
  return b.coins - a.coins;
});
for (let i = 0; i < 5; i++) {
  let li = document.createElement('li');
  li.textContent = `Player Name: ${playerData[i].name} Score: ${playerData[i].coins}`;
  leaderBoard.appendChild(li);
}
