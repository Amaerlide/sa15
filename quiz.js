const questions = [
    {
      question: "Who wrote Dune?",
      answers: ["Frank Herbert", "Isaac Asimov", "Arthur C. Clarke"],
      correctAnswer: "Frank Herbert"
    },
    {
      question: "Who created Star Wars?",
      answers: ["George Lucas", "Steven Spielberg", "James Cameron"],
      correctAnswer: "George Lucas"
    },
    {
      question: "Who is the Roman God of harvest?",
      answers: ["Ceres", "Venus", "Mars"],
      correctAnswer: "Ceres"
    }
  ];

  let currentQuestionIndex = 0;
  
  let score = 0;

  
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-btn');
const resultSection = document.getElementById('result');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(answer);
        answersElement.appendChild(answerButton);
    });
}

function checkAnswer(selectedAnswer){
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer == currentQuestion.correctAnswer){
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        displayQuestion();
    }
    else {
        showResult();
    }
}

function showResult(){
    resultSection.style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    if (currentQuestion < questions.length){
        displayQuestion();
    }
    else {
        showResult();
    }
});

displayQuestion();