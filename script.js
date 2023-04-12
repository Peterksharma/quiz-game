//Variable Corner
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('questions')
var answerButtonsElement = document.getElementById('answer-buttons')
var timerElement = document.getElementById('timer')
var saveButton = document.getElementById('save-btn')
var scoreDisplay = document.getElementById('score-display')
var highScoreDisplay = document.getElementById('top-score')

var shuffledQuestions, currentQuestionIndex //defaults both values to undfined
var timer;
var timeLeft = 20;
var score;
var scoreCount = 0

var questions = [
    {
        question: 'What are the different data types present in javascript?',
        answers: [
            {text: 'Number, String, Boolean, Symbol, Undefined, Null, Object', correct: true},
            {text: 'Integer, Float, String, Boolean, Object', correct: false},
            {text: 'Number, String, Boolean, Array, Object', correct: false},
            {text: 'Integer, Float, Character, Boolean, Object', correct: false}
        ]
    },
    {
        question: 'Explain Hoisting in javascript.',
        answers: [
            {text: 'Hoisting is a mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.', correct: true},
            {text: 'Hoisting is a technique for optimizing code execution by reordering statements.', correct: false},
            {text: 'Hoisting is a feature that allows you to use variables before they are declared.', correct: false},
            {text: 'Hoisting is a process where the interpreter moves all global and local variable declarations to the top of the script.', correct: false}
        ]
    },
    {
        question: 'Difference between “ == “ and “ === “ operators.',
        answers: [
            {text: '== compares values for equality with type coercion, while === compares values for equality without type coercion', correct: true},
            {text: '== compares values for strict equality, while === compares values for loose equality', correct: false},
            {text: '== compares values and data types, while === only compares values', correct: false},
            {text: '== is used for comparison, while === is used for assignment', correct: false}
        ]
    }
    
]

//Click click Click
startButton.addEventListener('click', startGame)

saveButton.addEventListener('click', saveInitialsAndScore)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//Funtion Junction
//----------------------------------
//funtion that starts the game
function startGame() {
    console.log('Quiz has been started');
    startButton.classList.add('hide');
    saveButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

    if (timer) {
        clearInterval(timer);
    }
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

//function that calls the next question and increase the score
function setNextQuestion() {
    scoreCount++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

//function that shows the next question from random
function showQuestion(question) {
    questionElement.innerText = question.question;

    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(selectedButton, correct === 'true')
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button !== selectedButton) {
            setStatusClass(button, false)
        }
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//function that ends the game. hide buttons not needed and changes the text on the start button.
function endGame() {
    questionContainerElement.classList.add('hide');
    resetState();
    nextButton.classList.add('hide');
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    saveButton.classList.remove('hide');
    timerElement.textContent = '';
    clearInterval(timer); // Clear the timer interval
    timeLeft = 20; 
}

function getScore() {
    var highScore = JSON.parse(localStorage.getItem("highScore"));
    if (highScore) {
        highScoreDisplay.textContent = `High Score: ${highScore.initials} - ${highScore.score}`;
    } else {
        highScoreDisplay.textContent = 'No high score yet';
    }
}

//gets the high score and compares it to the high score and updates if the score is higher.
function saveInitialsAndScore(initials, score) {
    var scoreObj = {
      initials: initials,
      score: score
    };
  
    var highScore = JSON.parse(localStorage.getItem("highScore"));
  
    if (!highScore || score > highScore.score) {
      localStorage.setItem("highScore", JSON.stringify(scoreObj));
      console.log(scoreObj.score + " this is the new high score");
    } else {
      console.log('This score is not higher than the high score.');
    }
    getScore();
  }
  
