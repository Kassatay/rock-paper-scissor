let computerPlay = function () {
    let selections = ["rock", "paper", "scissor"];
    let selection = selections[Math.floor(Math.random()*selections.length)];
 return selection
}




let roundOne = function (playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
return "It's tie you bitches!"
}
   else if (playerSelection === "rock" && computerSelection === "scissor") {
       return "You win bitch!"
   }  else if (computerSelection === "rock" && playerSelection === "scissor") {
       return "You lose bitch! rock beat scissor"
   } else if (playerSelection === "scissor" && computerSelection === "paper") {
       return "you win bitch! scissor beat paper"
   } else if (computerSelection === "scissor" && playerSelection === "paper") {
       return "you lose amigo! scissor beat paper"
   } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "you win bitch! paper cover the rock"
   } else if (computerSelection === "paper" && playerSelection === "rock") {
       return "you lose fucker! paper beat rock"
   }
}




const playerSelection = prompt("choose wisely")
computerSelection = computerPlay()

console.log(roundOne(playerSelection, computerSelection));
