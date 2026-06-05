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
  },
  {
    question: "Who is the richest man in the world?",
    options: [
      "A. Elon Musk",
      "B. Donald Trump",
      "C. Putin",
      "D. Abe Shinzo"
    ],
    answer: "A"
  },
  {
    question: "Who is the current president of USA?",
    options: [
      "A. Joe Biden",
      "B. Donald Trump",
      "C. Barack Obama",
      "D. Kamala Harris"
    ],
    answer: "B"
  }
];

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizFinished = false;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function startGame() {

  selectedQuestions = [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  currentQuestion = 0;
  score = 0;
  answered = false;
  quizFinished = false;

  nextBtn.disabled = false;
  nextBtn.textContent = "Next";

  loadQuestion();
}

function loadQuestion() {

  answered = false;

  const q = selectedQuestions[currentQuestion];

  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  resultEl.textContent = "";

  q.options.forEach(option => {

    const btn = document.createElement("button");

    btn.textContent = option;

    btn.addEventListener("click", () => {

      if (answered) return;

      answered = true;

      const answerLetter = option.charAt(0);

      if (answerLetter === q.answer) {
        resultEl.textContent = "正解！";
        score++;
      } else {
        resultEl.textContent =
          `不正解！正解は ${q.answer}`;
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
    startGame();
    return;
  }

  if (!answered) {

    resultEl.textContent =
      "あきらめるのはまだ早い！まずは答えを選ぼう！";

    return;
  }

  currentQuestion++;

  if (currentQuestion >= selectedQuestions.length) {

    questionEl.textContent = "クイズ終了！";
    choicesEl.innerHTML = "";

    resultEl.textContent =
      `あなたの正解率は ${score}/${selectedQuestions.length} (${Math.round(score / selectedQuestions.length * 100)}%)`;

    nextBtn.textContent = "もう一度やる？";

    quizFinished = true;

    return;
  }

  loadQuestion();
});

startGame();
