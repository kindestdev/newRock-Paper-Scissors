const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const allButtons = document.querySelectorAll('.button')
const pcSelectionDisplay = document.querySelector('.pcChoiceMsg')
const playerScore = document.querySelector('.playerScore');
const pcScore = document.querySelector('.computerScore')
const modal = document.querySelector('#modal')
const winnerAnnouncer = document.querySelector('.winnerAnnouncer')
const nextRoundBtn = document.querySelector('.playNextRound')
const roundAmounts = document.getElementById('gameMode')

let playerChoose ;
let computerChoose;

let playerWins = 0;
let computerWins = 0;

playerScore.textContent = playerWins;
pcScore.textContent = computerWins;
function computerSelection(){
  let randomNumber = Math.random();
  let roundedRandomNumber = Math.floor(randomNumber *3)+1;

if(roundedRandomNumber === 1){
  computerChoose = 'rock';
  pcSelectionDisplay.textContent = 'Rock'
}else if(roundedRandomNumber === 2){
  computerChoose = 'paper';
  pcSelectionDisplay.textContent = 'Paper'
}else {computerChoose = 'scissors';
  pcSelectionDisplay.textContent = 'Scissors'
  }
}

rockButton.addEventListener('click',()=>{
  playerChoose = rockButton.textContent.toLowerCase();
  computerSelection();
  round1()
});
paperButton.addEventListener('click',()=>{
  playerChoose = paperButton.textContent.toLowerCase();
  computerSelection();
  round1()
});
scissorsButton.addEventListener('click',()=>{
  playerChoose = scissorsButton.textContent.toLowerCase();
  computerSelection();
  round1()
});



function round1(){
  if(playerChoose === 'rock' && computerChoose === 'paper'){
    playerWins++
  }else if (playerChoose === 'paper' && computerChoose === 'rock'){
    playerWins++
  }else if (playerChoose === 'scissors' && computerChoose === 'paper'){
    playeplayerWinsScore++
  }else if (playerChoose === 'paper' && computerChoose === 'paper'){
    playerWins++;
    computerWins++;
  }else if(playerChoose === 'rock' && computerChoose === 'rock'){
    playerWins++;
    computerWins++;
  }else if (playerChoose === 'scissors' && computerChoose === 'scissors'){
    playerWins++;
    computerWins++;
  }else{computerWins++
  }

  playerScore.textContent = playerWins;
  pcScore.textContent = computerWins;

  if(roundAmounts.value === 'option1'){
    if(playerWins === 2 && computerWins < 2){
      winnerAnnouncer.textContent = 'You Win Congrats!';
      modal.classList.add('styled');
      allButtons.forEach(button => {
        button.setAttribute('id','disable');
        button.disabled = true;
    });
    }else if (computerWins === 2 && playerWins < 2){
      winnerAnnouncer.textContent = 'Computer Wins, Better luck next time';
      modal.classList.add('styled');
      allButtons.forEach(button => {
        button.setAttribute('id','disable');
        button.disabled = true;
    });
    }else if (playerWins === 2 && computerWins === 2)
    {winnerAnnouncer.textContent = 'Its a tie!';
    modal.classList.add('styled');
    allButtons.forEach(button => {
      button.setAttribute('id','disable');
      button.disabled = true;
  });
  }
  }else if (roundAmounts.value === 'option2'){
    if(playerWins === 3 && computerWins < 3){
      winnerAnnouncer.textContent = 'You Win Congrats!';
      modal.classList.add('styled');
      allButtons.forEach(button => {
        button.setAttribute('id','disable');
        button.disabled = true;
    });
    }else if (computerWins === 3 && playerWins < 3){
      winnerAnnouncer.textContent = 'Computer Wins, Better luck next time';
      modal.classList.add('styled');
      allButtons.forEach(button => {
        button.setAttribute('id','disable');
        button.disabled = true;
    });
    }else if (playerWins === 3 && computerWins === 3)
    {winnerAnnouncer.textContent = 'Its a tie!';
    modal.classList.add('styled');
    allButtons.forEach(button => {
      button.setAttribute('id','disable');
      button.disabled = true;
  });
  }
  }else if (roundAmounts.value === 'option3'){
    if(playerWins === 6 && computerWins < 6){
      winnerAnnouncer.textContent = 'You Win Congrats!';
      modal.classList.add('styled');
      allButtons.forEach(button => {
        button.setAttribute('id','disable');
        button.disabled = true;
    });
    }else if (computerWins === 6 && playerWins < 6){
      winnerAnnouncer.textContent = 'Computer Wins, Better luck next time';
      modal.classList.add('styled');
      allButtons.forEach(button => {
        button.setAttribute('id','disable');
        button.disabled = true;
    });
    }else if (playerWins === 6 && computerWins === 6)
    {winnerAnnouncer.textContent = 'Its a tie!';
    modal.classList.add('styled');
    allButtons.forEach(button => {
      button.setAttribute('id','disable');
      button.disabled = true;
  });
  }
  }
}

nextRoundBtn.addEventListener('click',()=>{
  modal.classList.remove('styled');
  allButtons.forEach(button => {
    button.removeAttribute('id');
    button.disabled = false;
});
  playerWins = 0;
  computerWins = 0;
  playerScore.textContent = 0;
  pcScore.textContent = 0;
})