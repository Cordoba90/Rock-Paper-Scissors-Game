// Setting the scores and selecting our HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const playerShowIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');
const result = document.getElementById('result');

// Game Functionality: Setting forEach function for the buttons.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           playerShowIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           // Game Score.
           // If it's a Tie .
           if(playerShowIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Tie ! ";
               text.style.color = 'orange';
               result.innerHTML = text.innerHTML;
               result.style.color = 'orange';
           } 
          // if it's not a Tie.
           else if(playerShowIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               result.innerHTML = text.innerHTML;
               result.style.color = 'rgb(1, 146, 1)';
           }else if(playerShowIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               result.innerHTML = text.innerHTML;
               result.style.color = 'red';
           }else if(playerShowIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               result.innerHTML = text.innerHTML;
               result.style.color = 'red';
           }else if(playerShowIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               result.innerHTML = text.innerHTML;
               result.style.color = 'rgb(1, 146, 1)';
           }else if(playerShowIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               result.innerHTML = text.innerHTML;
               result.style.color = 'red';
           }else if(playerShowIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               result.innerHTML = text.innerHTML;
               result.style.color = 'rgb(1, 146, 1)';
           }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.