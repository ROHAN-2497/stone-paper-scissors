let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");
const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  msg.innerText = "game was draw. play again. ";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comScorePara.innerText = compScore;
    msg.innerText = `You Lose!  ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userChoice) => {
  const comChoice = genComChoice();
  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "scissors" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
