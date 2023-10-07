const choices = ["rock", "paper", "scissors"];

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const userChoiceText = document.getElementById("user-choice");
    const computerChoiceText = document.getElementById("computer-choice");
    const resultText = document.getElementById("game-result");

    userChoiceText.textContent = `You Chose : ${userChoice}`; // Use backticks for template literals
    computerChoiceText.textContent = `Computer Chose : ${computerChoice}`;

    const result = determineWinner(userChoice, computerChoice);
    resultText.innerHTML = result;
    highlightWinner(resultText);
  });
});

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "<span style='color: darkOrange;'>It\'s a Tie</span>";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return '<span style="color: green;">You Win</span>';
  } else {
    return '<span style="color: red;">You Lose</span>';
  }
};

const highlightWinner = (resultText) => {
    resultText.style.color = resultText.textContent.includes('You win')
      ? '#27ae60'
      : '#e743c3';
  };