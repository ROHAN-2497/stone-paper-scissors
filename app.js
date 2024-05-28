let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genComChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const playgame = (userChoice) => {
  const comChoice = genComChoice();
  if (userChoice === comChoice) {
    console.log("match is draw");
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
