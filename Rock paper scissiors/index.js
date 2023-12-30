let playerScore=0
let computerScore=0
function getComputerChoice()
{
   let choices=["rock","paper","scissor"]
   return choices[Math.floor(Math.random()*choices.length)]
}
function getPlayerChoice()
{
   let playerChoice=prompt("Enter your choice");
   return playerChoice
}
function playRound(computer,player)
{
   if((player=="rock"&&computer=="paper")||
    (player=="paper"&&computer=="scissor")||
    (player=="scissor"&&computer=="rock"))
   {
      computerScore+=1 
      console.log(computer + " beats "+ player + " Computer wins!!")
   }
   else if(player==computer)
   {
      console.log("Draw")
   }
   
   else 
   {
      playerScore+=1
      console.log(player + " beats "+ computer + " Player wins!!")
   }
}
function game()
{
   for(let i=1;i<=5;i++)
   {  
      let player=getPlayerChoice()
      let computer=getComputerChoice()
      console.log(computer)
      console.log(player)
      console.log(playRound(computer,player))
   }
   console.log(computerScore)
   console.log(playerScore)
   if(computerScore<playerScore)
   {
      console.log("PLAYER WINS THE GAME!!!")
   }
   else if(computerScore=playerScore){
      console.log("THE GAME IS DRAW!!!")
   }
   else{
      console.log("COMPUTER WINS THE GAME!!!")
   }
}

game()