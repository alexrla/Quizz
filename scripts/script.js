const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
];

// Substituição do quizz para a primeira pergunta
function init() {
  // Criar a primeira pergunta
  createQuestion(0);
}

// Criar pergunta
function createQuestion(questionCurrent) {
  // Limpar questão anterior
  const allButtons = answersBox.querySelectorAll("button");

  allButtons.forEach((btn) => {
    btn.remove();
  });

  // Alterar texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[questionCurrent].question;
  questionNumber.textContent = questionCurrent + 1;

  // Inserir alternativas
  questions[questionCurrent].answers.forEach((answer, index) => {
    // Cria o template do botão do quizz
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText= answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[index];
    answerText.textContent = answer["answer"];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remover as classes hide e answer-template
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Inserir as alternativas na tela
    answersBox.appendChild(answerTemplate);

    // Inserir evento no botão
    answerTemplate.addEventListener("click", function() {

    });
  });

  // Incrementar o número da questão
  actualQuestion++;
}

// Inicialização do Quizz
init();
