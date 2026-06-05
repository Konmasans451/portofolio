const questions = [
  {
    question: "Who created Python?",
    options: [
      "A. Guido van Rossum",
      "B. Elon Musk",
      "C. Bill Gates",
      "D. Mark Zuckerberg"
    ],
    answer: "A"
  },
  {
    question: "What year was Python created?",
    options: [
      "A. 1989",
      "B. 1991",
      "C. 2000",
      "D. 2016"
    ],
    answer: "B"
  },
  {
    question: "Python is attributed to which comedy group?",
    options: [
      "A. Lonely Island",
      "B. Smosh",
      "C. Monty Python",
      "D. SNL"
    ],
    answer: "C"
  },
  {
    question: "Is the Earth round?",
    options: [
      "A. True",
      "B. False",
      "C. Sometimes",
      "D. What's Earth?"
    ],
    answer: "A"
  }
];

let currentQuestion = 0;
let score = 0;
let quizFinished = false;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

  if (currentQuestion >= questions.length) {
    questionEl.textContent = "Quiz Finished!";
    choicesEl.innerHTML = "";

    resultEl.textContent =
      `Your score is ${Math.round(score / questions.length * 100)}%`;

    nextBtn.textContent = "Play Again";
    quizFinished = true;
    return;
  }
  
  const q = questions[currentQuestion];

  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  resultEl.textContent = "";

  q.options.forEach(option => {

    const btn = document.createElement("button");

    btn.textContent = option;

    btn.addEventListener("click", () => {

      const answerLetter = option.charAt(0);

      if (answerLetter === q.answer) {
        resultEl.textContent = "CORRECT!";
        score++;
      } else {
        resultEl.textContent = "WRONG!";
      }

      document
        .querySelectorAll("#choices button")
        .forEach(button => button.disabled = true);

    });

    choicesEl.appendChild(btn);
    choicesEl.appendChild(document.createElement("br"));
  });
}

nextBtn.addEventListener("click", () => {

  if (quizFinished) {

    currentQuestion = 0;
    score = 0;
    quizFinished = false;

    questions.sort(() => Math.random() - 0.5);

    nextBtn.textContent = "Next";

    loadQuestion();
    return;
  }

  currentQuestion++;
  loadQuestion();

});
