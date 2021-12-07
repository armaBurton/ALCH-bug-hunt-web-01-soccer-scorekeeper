// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.querySelectorAll('#name-form');
const teamOneAddButton = document.querySelector('team-one-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

const pastGames = 0;

let currentGame = {
    name1: '',
    name2: '',
    score1: 0,
    score2: 0,
};

nameForm.addEventListener('submit', (e) => {
    const formData = new FormData();
  
    const name1 = formData.get('one');
    const name2 = formData.get('two');

    currentGame.name1 === name1;
    currentGame.name2 === name2;
    
    nameForm.reset();
    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    currentGame.score1++;
    
    renderCurrentGameEl();
});

teamTwoAddButton.addEventListener(() => {
    currentGame.score2++;

    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener(() => {
    currentGame.score1--;

});

teamTwoSubtractButton.addEventListener('click', () => {
    currentGame.score2--;
});

function displayCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = currentGame;
    teamTwoLabel.textContent = currentGame.name2;

    const gameEl = renderGame(currentGame);
    
    gameEl.classList.add('current');
}


function displayAllGames() {
    for (let game of pastGames) {
        const gameEl = renderGame(pastGames);

        gameEl.classList.add('past');
        
        pastGamesEl.append(game);
    }
}


finishGameButton.addEventListener('click', () => {
    
    pastGames.push(currentGame);

    displayAllGames();

    currentGame.name1 = '';
    currentGame.name2 = '';
    currentGame.score1 = 0;
    currentGame.score2 = 0;

    displayCurrentGameEl();
});

displayCurrentGameEl();
