'use strict';

let secretNumber = 30;
//let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;


// Listener is on the click Button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if(guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Number is to high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Number is to low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Number is to low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    } 
});

document.querySelector('.again').addEventListener('click', function() {
    console.log('again');
    score = 20;
    document.querySelector(".guess").value = '';
    document.querySelector(".score").textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
});

