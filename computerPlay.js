let playerScore = 0
let computerScore = 0

function computerPlay() {
  const hands = [ 'rock', 'paper', 'scissors'];
  const computerRandom = hands[Math.floor(Math.random()*hands.length)]

  return computerRandom;
};

function playRound(playerSelection, computerSelection) {
  if((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
    outcomeInfo.textContent = "You lose";
    computerScore++
    
  }
  else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
  (playerSelection == 'paper' && computerSelection == 'rock') || 
  (playerSelection == 'scissors' && computerSelection == 'paper')) {
    outcomeInfo.textContent = "You win";
    playerScore++
  } else {
    outcomeInfo.textContent = "It's a tie";
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const outcomeInfo = document.querySelector("#outcome")
const playScore = document.querySelector("#playScore")
const compScore = document.querySelector("#compScore")
const startPlay = document.querySelector(".startPlay")
const startComp = document.querySelector(".startComp")
const restartBtn = document.querySelector(".restartBtn")
const finalResult = document.querySelector(".finalResult")


rock.addEventListener("click", () => handleClick('rock'));
paper.addEventListener("click", () => handleClick('paper'));
scissors.addEventListener("click", () => handleClick('scissors'));
restartBtn.addEventListener("click", restartGame)

function handleClick(playerSelection) {
  const computerSelection = computerPlay()
  playRound(playerSelection,computerSelection);
  choice(playerSelection,computerSelection)
  updateScore()

  if (gameOver()) {
    finalMessage()
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function gameOver() {
  return playerScore === 5 || computerScore === 5
}

function finalMessage() {
  if (playerScore > computerScore) {
    finalResult.textContent = "You Won The Game"
  }else {
    finalResult.textContent = "You Lost The Game"
  }
}

function updateScore() {
  playScore.textContent = `${playerScore}`
  compScore.textContent = `${computerScore}`
}

function choice(playerSelection,computerSelection) {
  const playerHand = `fa-hand-${playerSelection}`
  const computerHand = `fa-hand-${computerSelection}`

  startPlay.classList = `fas ${playerHand} startPlay`
  startComp.classList = `fas ${computerHand} startComp`
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  playScore.textContent = '0'
  compScore.textContent = '0'
  finalResult.textContent = ''
  startComp.classList = `fas fa-circle startComp`
  startPlay.classList = `fas fa-circle startPlay`
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}