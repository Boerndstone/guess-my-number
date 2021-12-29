'use strict';

// Listener is on the click Button
document.querySelector('.check').addEventListener('click', function() {
    //console.log(document.querySelector('.guess').value);
    const guess = document.querySelector('.guess').value;
    console.log(typeof guess);
    //document.querySelector('.message').textContent = 'Correct number';

    if(!guess) {
        document.querySelector('.message').textContent = 'No number';
    } /*else {
        document.querySelector('.message').textContent = 'Correct number';
    }*/
});

