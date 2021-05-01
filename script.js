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
}  else if (playerSelection === "rock" && computerSelection === "scissor") {
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
   } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beat rock") 
   userScore++;
   } else if (computerSelection === "paper" && playerSelection === "rock") {
       alert ("You lose! Paper beat rock")
       computerScore++;
   } else {
       alert("incorrect reply, please type rock, paper or scissor")
   }
   
}

let gamePlay = function () {
    for (i = 0; i < 5;i++ ) {
        const playerSelection = prompt("Choose rock, paper or scissor..").toLowerCase();
    const computerSelection = computerPlay();
        roundOne(playerSelection, computerSelection);
    }
    if (userScore > computerScore) {
        alert(`You win! your score is: ${userScore} and computer score is: ${computerScore}`)
    } else if (userScore < computerScore) {
        alert(`You lost! your score is: ${userScore} and computer score is: ${computerScore}`)
    } else {
        alert(`It's a tie! your score is: ${userScore} and computer score is: ${computerScore}`)
    }
}


gamePlay()






