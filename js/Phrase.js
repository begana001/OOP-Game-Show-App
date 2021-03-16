/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

     constructor(phrase){

         this.phrase = phrase;
         
     }


     addPhraseToDisplay(){

         const phraseDiv = document.querySelector('#phrase ul');
         const split = this.phrase.split("");

         split.forEach( character => {

            const li = document.createElement('li');
            phraseDiv.appendChild(li);
            li.textContent = character;

             if( character === " "){
                li.className = 'hide space';
             } else {
                li.className = `hide letter ${character}`;
             }

         });
     }



     checkLetter(letter){

        if(this.phrase.includes(letter)){
            return true;
        } else { 
            return false;
        }
        
     }


     showMatchedLetter(letter){

        const phraseLetters = document.querySelectorAll('.letter');

        phraseLetters.forEach( phraseLetter => {
            if(phraseLetter.textContent === letter){
                phraseLetter.className = 'show';
            }
            
        })

     }
 }