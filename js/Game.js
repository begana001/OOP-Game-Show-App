/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor(){

    this.missed = 0;
    this.phrases = this.createPhrase();
    this.activePhrase = null;

    }


    createPhrase(){

        const createPhrase = [
            new Phrase('indicate'),
            new Phrase('instantiate'),
            new Phrase('componant'),
            new Phrase('associate'),
            new Phrase('assignment')
        ];

        return createPhrase;
    }


    startGame(){
    
        const overlay = document.querySelector('#overlay');
        const selectedPhrase = this.getRandomPhrase();
        
        overlay.style.display = 'none';

        selectedPhrase.addPhraseToDisplay();

        this.activePhrase = selectedPhrase;

    }


    getRandomPhrase(){

        return this.phrases[Math.floor(Math.random() * this.phrases.length)];

    }


    handleInteraction(button){

        button.disabled = true;
    

        if( this.activePhrase.checkLetter(button.textContent) === false ){
            button.className = 'wrong';
            this.removeLife();
        } else {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter( button.textContent );
            this.checkForWin();
        }

        if( this.checkForWin() === true ){
            this.gameOver(true);
        }

    }

    
    removeLife(){

        this.missed += 1;
        const scoreboard = document.querySelector('#scoreboard ol');
        const life = document.querySelector('img[src="images/liveHeart.png"]');
        life.src="images/lostHeart.png";
        
        if( this.missed === 5 ){
            this.gameOver(false);
        }

    }


    checkForWin(){

        const matchedLetters = document.querySelectorAll('.show');
        const matched = matchedLetters.length;
        const givenPhrase = this.activePhrase.phrase.length;

        if( matched === givenPhrase ){
            return true;
        } else {
            return false;
        }
    
    }

    gameOver(gameWon){

        const overlay = document.querySelector('#overlay');
        const gameOverMsg = document.querySelector('#game-over-message');
        const letters = document.querySelectorAll('ul li');
        const buttons = document.querySelectorAll('button');
        const lostLifes = document.querySelectorAll('img[src="images/lostHeart.png"]');

        if( gameWon === true ){
            overlay.className = 'win';
            gameOverMsg.textContent = "Congratulation! You Win!"
            overlay.style.display = 'block';
        } else {
            overlay.className = 'lose';
            gameOverMsg.textContent = "It's Too Bad! Try Again!"
            overlay.style.display = 'block';
        }

        
        letters.forEach( letter => {
            letter.remove();
        });

        buttons.forEach( button => {
            button.disabled = false;
            button.className = 'key';
        });
        
        lostLifes.forEach( life => {
            life.src="images/liveHeart.png";
        });

        
    
    }
}