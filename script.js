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
      "A. Elon musk",
      "B. Donald trump",
      "C. Putin",
      "D. Abe Shinzo"
    ],
    answer: "A"
  },
    {
    question: "Who is the current president of USA",
    options: [
      "A. Joe Biden",
      "B. Donald trump",
      "C. Barack Obama",
      "D. Kamala Harris"
    ],
    answer: "B"
  },
];

let currentQuestion = 0;
let score = 0;
let quizFinished = false;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

// 問題を表示
function loadQuestion() {

  if (currentQuestion >= questions.length) {

    questionEl.textContent = "クイズ修了!";
    choicesEl.innerHTML = "";

    resultEl.textContent =
      `あなたの正解率は ${score}/${questions.length} (${Math.round(score / questions.length * 100)}%)`;
    answered = false;
    nextBtn.textContent = "もう一度やる？";

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
        resultEl.textContent = "正解！";
        score++;
      } else {
        resultEl.textContent = `間違え! 正解は: ${q.answer}`;
      }

      // 回答後はボタン無効化
      document
        .querySelectorAll("#choices button")
        .forEach(button => button.disabled = true);

    });

    choicesEl.appendChild(btn);
    choicesEl.appendChild(document.createElement("br"));
  });
}

btn.addEventListener("click", () => {

  answered = true;

  const answerLetter = option.charAt(0);
  if (quizFinished) {

    currentQuestion = 0;
    score = 0;
    quizFinished = false;

    questions.sort(() => Math.random() - 0.5);

    nextBtn.textContent = "次に進む";

    loadQuestion();
    return;
  }

  if (!answered) {
    resultEl.textContent =
      "諦めないで! 適当でも正解するかもよ.";
    return;
  }

  currentQuestion++;
  loadQuestion();

});
