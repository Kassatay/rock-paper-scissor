let computerPlay = function () {
    let selections = ["rock", "paper", "scissor"];
    let selection = selections[Math.floor(Math.random()*selections.length)];
 return selection
}




let roundOne = function (playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
return "It's tie!"
}
   else if (playerSelection === "rock" && computerSelection === "scissor") {
       return "You win!"
   }  else if (computerSelection === "rock" && playerSelection === "scissor") {
       return "You lose! rock beat scissor"
   } else if (playerSelection === "scissor" && computerSelection === "paper") {
       return "you win!r"
   } else if (computerSelection === "scissor" && playerSelection === "paper") {
       return "you lose! scissor beat paper"
   } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "you win!"
   } else if (computerSelection === "paper" && playerSelection === "rock") {
       return "you lose! paper beat rock"
   }
}




const playerSelection = prompt("choose rock, paper or scissor")
computerSelection = computerPlay()

console.log(roundOne(playerSelection, computerSelection));
