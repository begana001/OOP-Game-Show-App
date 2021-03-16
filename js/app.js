/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const resetButton = document.querySelector('#btn__reset');
const keyboard = document.querySelectorAll('.key');


resetButton.addEventListener('click', () =>{

    game = new Game();

    game.startGame();

})


keyboard.forEach( key => {

    key.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });

})

