const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex //defaults both values to undfined

startButton.addEventListener('click', startGame)

function startGame () {
    console.log('Quiz has been started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        questionContainerElement.classList.add('hide');
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
        nextButton.classList.add('hide');
    }
}

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

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

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

const questions = [
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
