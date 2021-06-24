'use strict';

// Global Variable
let ace = document.getElementById('ace');
let king = document.getElementById('king');
let queen = document.getElementById('queen');
let jack = document.getElementById('jack');
let ten = document.getElementById('ten');

// Prefilled leaderboard
let preFilledPlayers = [
  { name: 'Lucky', coins: 99999},
  { name: 'Taylor', coins: 2 },
  { name: 'Heather', coins: 1 },
  { name: 'Phil', coins: 0 },
  { name: 'Ryan', coins: 4 }
];

// Grabs local storage for scores and sorts them from highest to lowest
let getScores = JSON.parse(localStorage.getItem('playerScores'));
let playerData = getScores ? [...preFilledPlayers, ...getScores] : preFilledPlayers;
playerData.sort(function (a, b) {
  return b.coins - a.coins;
});

// Places each score on a card in order from highest to lowest
for (let i = 0; i < 5; i++) {
  if (i === 0){
    let p = document.createElement('p');
    p.textContent = `${playerData[i].name} Score: ${playerData[i].coins}`;
    p.style.position = 'absolute';
    ace.appendChild(p);
  }

  else if (i === 1){
    let p = document.createElement('p');
    p.textContent = `${playerData[i].name} Score: ${playerData[i].coins}`;
    p.style.position = 'absolute';
    king.appendChild(p);
  }

  else if (i === 2){
    let p = document.createElement('p');
    p.textContent = `${playerData[i].name} Score: ${playerData[i].coins}`;
    p.style.position = 'absolute';
    queen.appendChild(p);
  }

  else if (i === 3){
    let p = document.createElement('p');
    p.textContent = `${playerData[i].name} Score: ${playerData[i].coins}`;
    p.style.position = 'absolute';
    jack.appendChild(p);
  }

  else if (i === 4) {
    let p = document.createElement('p');
    p.textContent = `${playerData[i].name} Score: ${playerData[i].coins}`;
    p.style.position = 'absolute';
    ten.appendChild(p);
  }
}
