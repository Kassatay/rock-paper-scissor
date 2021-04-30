let computerPlay = function () {
    let selections = ["rock", "paper", "scissor"];
    let selection = selections[Math.floor(Math.random()*selections.length)];
 return selection
}


let userScore = 0;
let computerScore = 0;


let roundOne = function (playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
alert("It's a tie!!")
}else if (playerSelection === "rock" && computerSelection === "scissor") {
       alert("You win! rock beat scissor!");
       userScore++;
   }  else if (computerSelection === "rock" && playerSelection === "scissor") {
     alert("You lose! rock beat scissor");
    computerScore++;
   } else if (playerSelection === "scissor" && computerSelection === "paper") {
  alert("you win! scissor beat paper");
  userScore++;
   } else if (computerSelection === "scissor" && playerSelection === "paper") {
   alert("you lose! scissor beat paper");
  computerScore++;
   } else if (playerSelection === "paper" && playerSelection === "rock") {
    alert("You win! Paper beat rock") 
   userScore++;
   } else if (computerSelection === "paper" && playerSelection === "rock") {
       alert ("You lose! Paper beat rock")
       computerScore++;
   } else {
       alert("incorrect reply")
   }
   console.log(userScore, computerScore)
   
}






const playerSelection = prompt("choose rock, paper or scissor")
computerSelection = computerPlay()

console.log(roundOne(playerSelection, computerSelection));



