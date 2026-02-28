/*let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

*/


 let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};





const movesDisplay = document.querySelector('.moves');


const scoreDisplay = document.querySelector('.score');

const resetButton = document.querySelector('.reset');

const resultDisplay = document.querySelector('#result');

const choices = [ "rock", "paper", "scissors" ];

 
const rockBtn = document.querySelector('.rock');

const paperBtn = document.querySelector('.paper');

const scissorsBtn = document.querySelector('.scissors');


updateScoreDisplay();


function playGame (playerChoice) {
    const computerMove = choices[Math.floor(Math.random ()  * 3 )];
    let result = "";


if (playerChoice === computerMove) {
    score.ties++;
    result = `Ties!

    you pick  ${playerChoice} 
    computer  pick ${computerMove}`;

}  else if ((playerChoice === "rock" && computerMove === "scissors") ||
          (playerChoice === "paper" && computerMove ===  "rock") ||
          (playerChoice === "scissors" && computerMove ===  "paper")) {
             score.wins++;
            result = `You win! 
            you pick ${playerChoice} 
            computer  pick ${computerMove}`;

           } else {
             score.losses++;
            result = `You lose! 
            you pick ${playerChoice}
            computer  pick ${computerMove}`;
        

           }
           resultDisplay.textContent =result;


         movesDisplay.innerHTML= `
         you
         <img src="${playerChoice}-emoji.png" class="move-icon">
         computer
         <img src="${computerMove}-emoji.png" class="move-icon">`;
           

           
localStorage.setItem('score', JSON.stringify(score));

updateScoreDisplay();





}
// updating score display

function updateScoreDisplay() {
    
 scoreDisplay.textContent = `Wins: ${score.wins} | Losses: ${score.losses} |  Ties: ${score.ties}`;
}



 

rockBtn.addEventListener("click", () => 
    playGame ("rock"));


paperBtn.addEventListener("click", () => 
    playGame ("paper"));



scissorsBtn.addEventListener("click", () => 
    playGame ("scissors"));



resetButton.addEventListener('click', () => {
    score.wins=0;
    score.losses=0;
    score.ties=0


    
 localStorage.removeItem('score');
 updateScoreDisplay();
 resultDisplay.textContent = '';


});







