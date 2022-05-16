'use strict';
let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there's no input
  if (!guess) {
    displayMessage(`⛔️ No number!`);

    // When the player wins the game
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    // change the background color to #60b347
    document.querySelector('body').style.backgroundColor = '#60b347';
    // change the width on "number" element
    document.querySelector('.number').style.width = '30rem';
    // show the correct number
    document.querySelector('.number').textContent = secretNumber;

    // set high score
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //if the guess is different
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low`);
    // decrease the score by 1
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`💥 You lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  
  // When guess is too high
  else if (guess > secretNumber) {
    displayMessage(`📈 Too high!`);
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage()= `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    displayMessage(`📉 Too low`);
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage()= `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }

  */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
