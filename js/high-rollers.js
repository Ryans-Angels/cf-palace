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
  if (i === 0){
    let card1 = document.getElementById('acecardcontainer');
    let ace = document.createElement('p');
    ace.textContent = `Player Name: ${playerData[i].name} Score: ${playerData[i].coins}`;
    card1.appendChild(ace);
  }

  else if (i === 1){
    document.getElementById('king');
    let king = document.createElement('p');
    king.textContent = `Player Name: ${playerData[i].name} Score: ${playerData[i].coins}`;
    leaderBoard.appendChild(king);
  }

  else if (i === 2){
    document.getElementById('queen');
    let queen = document.createElement('p');
    queen.textContent = `Player Name: ${playerData[i].name} Score: ${playerData[i].coins}`;
    leaderBoard.appendChild(queen);
  }

  else if (i === 3){
    document.getElementById('jack');
    let jack = document.createElement('p');
    jack.textContent = `Player Name: ${playerData[i].name} Score: ${playerData[i].coins}`;
    leaderBoard.appendChild(jack);
  }

  else if (i === 4) {
    document.getElementById('ten');
    let ten = document.createElement('p');
    ten.textContent = `Player Name: ${playerData[i].name} Score: ${playerData[i].coins}`;
    leaderBoard.appendChild(ten);
  }
}
