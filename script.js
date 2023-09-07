let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, secret) => {
  if (calcDistance(human, secret) < calcDistance(computer, secret)) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (val) => {
  val === 'human' ? (humanScore += 1) : (computerScore += 1);
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

const calcDistance = (val, secret) => {
  return Math.abs(val - secret);
};
