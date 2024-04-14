const easyButton = document.getElementById('easyButton');
const hardButton = document.getElementById('hardButton');
const resetButton = document.getElementById('resetButton');
const submitAnswerButton = document.getElementById('submitAnswerButton');
const quizQuestion = document.getElementById('quizQuestion');
const quizAnswers = document.getElementById('quizAnswers');
const quizResult = document.getElementById('quizResult');
const scoreDisplay = document.getElementById('score');
const image = document.getElementById('picture');
const picture = '<img src="images/desktop-setup-large.png" class="card-img rounded" alt="desktop background with premiere open">';


let correctAnswers = 0;
let selectedAnswerElement = null;

easyButton.addEventListener('click', function() {
  fetchQuestions('easy');
  image.innerHTML = '';
});

hardButton.addEventListener('click', function() {
  fetchQuestions('hard');
  image.innerHTML = '';
});

async function fetchQuestions(difficulty) {
  const url = `https://quizapi.io/api/v1/questions?apiKey=r8lZJyGjWokKOS8TpNDEo7cXwFMvbl0WKLMfuqqJ&limit=1&difficulty=${difficulty}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      const question = data[0];
      displayQuestion(question);
    }
  } catch (error) {
    console.error('Error fetching quiz question:', error);
  }
}

function displayQuestion(question) {
  quizQuestion.textContent = question.question;
  quizAnswers.innerHTML = '';
  for (const key in question.answers) {
    if (question.answers[key]) {
      const button = document.createElement('button');
      button.textContent = question.answers[key];
      button.classList.add('btn', 'btn-outline-light', 'mt-3', 'col-lg-3', 'm-lg-2');
      button.setAttribute('data-correct', question.correct_answers[key + '_correct']);
      button.addEventListener('click', function() {
        selectAnswer(this);
      });
      quizAnswers.appendChild(button);
    }
  }
}

function selectAnswer(button) {
  if (selectedAnswerElement) {
    selectedAnswerElement.classList.remove('bg-light', 'text-dark');
  }
  selectedAnswerElement = button;
  selectedAnswerElement.classList.add('bg-light', 'text-dark');
  submitAnswerButton.disabled = false;
}

submitAnswerButton.addEventListener('click', function() {
  if (selectedAnswerElement) {
    checkAnswer(selectedAnswerElement);
    selectedAnswerElement.classList.remove('bg-light', 'text-dark');
    selectedAnswerElement = null;
    this.disabled = true;
  }
});

resetButton.addEventListener('click', function() {
  correctAnswers = 0;
  localStorage.setItem('correctAnswers', correctAnswers);
  scoreDisplay.textContent = `Score: ${correctAnswers}`;
  quizResult.textContent = '';
  quizAnswers.innerHTML = '';
  quizQuestion.innerHTML = '';
  image.innerHTML = picture;
});

function checkAnswer(selectedAnswer) {
  const isCorrect = selectedAnswer.getAttribute('data-correct') === 'true';
  quizResult.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
  if (isCorrect) {
    correctAnswers++;
    updateScore(correctAnswers);
  }
}

function updateScore(correct) {
  correctAnswers = correct;
  localStorage.setItem('correctAnswers', correctAnswers);
  scoreDisplay.textContent = `Score: ${correctAnswers}`;
}
