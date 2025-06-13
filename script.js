let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetButton;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

function checkGuess() {
  const userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Palpites anteriores: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Parabéns! Você Acertou!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Fim de jogo';
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Errado!';
    lastResult.style.backgroundColor = 'yellow';

    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Muito baixo!';
    } else {
      lowOrHi.textContent = 'Muito alto!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Jogar novamente';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'transparent';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
