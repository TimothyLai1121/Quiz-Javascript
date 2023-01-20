/*
// Declare a variable to hold the timer
let timer;

// Add an event listener to the start button
document.getElementById("start-button").addEventListener("click", function() {
    // Start the timer (e.g. using setInterval)
    timer = setInterval(function(){
        // code to update the timer display
    }, 1000); // 1000ms = 1s
    // Present the first question
    presentQuestion(0);
});

// Function to present a question
function presentQuestion(questionIndex) {
    // Get the question element
    let questionElement = document.getElementById("question");
    // Update the question text
    questionElement.textContent = questions[questionIndex].text;
    // Show the question element
    questionElement.style.display = "block";
    // Show the answer choices
    // You will have to loop through the answers and add them to the DOM
}

const questions = [
    {
        text: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        text: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false }
        ]
    }
];

*/
/* 

class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
        this.timer = null;
    }

    start() {
        this.timer = setInterval(() => {
            // code to update the timer display
        }, 1000);
        this.presentQuestion();
    }

    presentQuestion() {
        let question = this.questions[this.questionIndex];
        // update the question text and show the answers choices
    }

    checkAnswer(answer) {
        let question = this.questions[this.questionIndex];
        if(question.answers[answer].correct) {
            this.score++;
        } else {
            // subtract time from the timer
        }
        this.questionIndex++;
        if(this.questionIndex === this.questions.length) {
            this.endQuiz();
        } else {
            this.presentQuestion();
        }
    }

    endQuiz() {
        clearInterval(this.timer);
        // show the final score and the input to save the initials
    }
}

const quiz = new Quiz(questions);
document.getElementById("start-button").addEventListener("click", quiz.start.bind(quiz));

*/