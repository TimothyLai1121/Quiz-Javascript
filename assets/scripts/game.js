/* Find shortcut for VS Snippet */
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
/*console.log(choices) */
/* Showing Arrays */
 
let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What does not count as WittDtjr for Oil/Air Filter?",
        choice1: "<Air Filter>",
        choice2: "<Oil Filter Wrench>",
        choice3: "<Fuel Filter>",
        choice4: "<Oil Drain Plug>",
        answer: 4
    },
    {
        question: "What does not count as WittDtjr for Radiator?",
        choice1: "<Radiator Cap>",
        choice2: "<Coolant/Heater Hoses>",
        choice3: "<Thermostat>",
        choice4: "<Anti-freeze/Coolants>",
        answer: 2
    },
    {
        question: "What does not count as WittDtjr for Water Pump?",
        choice1: "<Heater Core>",
        choice2: "<Thermostat>",
        choice3: "<Fuel Filter>",
        choice4: "<Oil Drain Plug>",
        answer: 4
    }
];

// Scores //
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
/* Fixed : 56, 75, 68, 67 */
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
    
        choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]; 
        });

        availableQuestions.splice(questionIndex, 1); 
        acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e=> {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    })
})
/* Line 56, 75, 68, 67 undefined */
startGame();