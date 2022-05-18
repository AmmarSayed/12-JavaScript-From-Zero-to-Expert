'use strict';
// global variables
let currentScore;
let activePlayer;
let scores;
let playing;

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.getElementById('dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// functions

const init = function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = scores[0];
  current1El.textContent = scores[1];

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  // switch the player
  currentScore = 0;
  //display current score
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  //switch style
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

/////////////////////////////////////
/////////////////////////////////////
// initiate the game variables
/////////////////////////////////////
/////////////////////////////////////
init();

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (!playing) return;
  // 1. generate a random dice roll
  const dice = Math.ceil(Math.random() * 6);

  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // switch to next player

    switchPlayer();
  }
});

// holding a score
btnHold.addEventListener('click', function () {
  if (!playing) return;

  // add current score to the active player score
  scores[activePlayer] += currentScore;

  current0El.textContent = scores[0];
  current1El.textContent = scores[1];

  // check if player score >= 100
  if (scores[activePlayer] >= 100) {
    playing = false;

    //finsh the game
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    return;
  }

  switchPlayer();
});

// Resetting the game
btnNew.addEventListener('click', init);
