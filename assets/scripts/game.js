const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
/* Testing */
/* console.log(choices); */
/* console doesn't show p.choice-text */
/* script src=, not href= */
/* length 4 for 4 choices */
/* Adding array.from line 2 */

/* Variable. Same as Challenge 03 */

const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
/* {} indicate objects */
let acceptingAnswers = false;
/* This will create a delay for user */
let score = 0;
/* score, user need to engage */
let questionCounter = 0;
let avaialbleQuestions = [];

/* Starting out with 5 questions */
/* template below to generate more */
/* let questions = [
    {
        question: "",
        choice1: "<>",
        choice2: "<>",
        choice3: "<>",
        choice4: "<>",
        answer: -no strings or booleans. Just number-
    }
];
/* end of template */
let questions = [
    {
        question: "What does not include in Oil/Air Filter?",
        choice1: "<Air Filter>",
        choice2: "<Fuel Filter>",
        choice3: "<PCV Valve>",
        choice4: "<Oil + Oil Filters>",
        answer: 4
    },
    {   
        question: "What does not include in Battery?",
        choice1: "<Battery Installation Kit (BT-1K)>",
        choice2: "<Battery Tender>",
        choice3: "<Battery Grease (BTP-1)>",
        choice4: "<Battery Protector Washer>",
        answer: 2
    },
    {
        question: "What does not include in Brake Pads?",
        choice1: "<Rotors/Drums>",
        choice2: "<Brake Calipers>",
        choice3: "<Brake Hardwares>",
        choice4: "<Brake Fluids>",
        answer: 4
    },
    {
        question: "What does not include in Air Compressor?",
        choice1: "<A/C Accumulator>",
        choice2: "<Freons (R-134A & R1234yf)>",
        choice3: "<Belts>",
        choice4: "<A/C Filter Drier>",
        answer: 2
    },
    {
        question: "What statement is false below?",
        choice1: "<AutoZoner A said we are DIY so most customer do not need our advices. AutoZoner B said that after greeting customer first time, do not approach second time since it is bothering them.>",
        choice2: "<AutoZoner A said that we should walk to the customers to the aisle and hand the product to ensure making sales. AutoZoner B said that by being attentive, it also increase customer services and prevent any hazards or loss prevention.>",
        choice3: "<AutoZoner A said that when attend customers on the phone,try to afford from good to premiumn price. AutoZoner B said that attending customer at the store, we will offer premium to good>",
        choice4: "<Autozoner A said that we price match by utilizing browser and call competitor to ensure pricing are competitive. AutoZoner B said that even though that customer can be eligible for Promo-Code online if they present us the code with an exception of VDP>",
        answer: 1
    }
];

/* adding countdown */

var count = 90;
var interval = setInterval(function(){
    document.getElementById('count').innerHTML = count;
        count--;
        if (count === 0){
            clearInterval(interval);
            document.getElementById('count').innerHTML='You Good?';
            alert("Time is up!");
        /* 
        } else if (count == 0){
            document.getElementById('count');
            alert("You still have plenty of times. Go check out my website");
        */
    }
}, 1000);




/* 10/50 */
/* 5 questions - changes accordingly to line 34 */
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
/* const MAX_QUESTIONS will help user move into end page later */
/* Arrow Syntax */

startGame = () => {
    questionCounter = 0;
    score = 0;
    avaialbleQuestions = [...questions];
    /* either include line 34-75 manually again or use spread operator */
    /*testing */
    console.log(avaialbleQuestions);
    /* showing Arrays 5 but from 0-4, positive start at 0, negative start at [-1] */
    getNewQuestion();
};
/* Arrow Syntax & Pararemters */
getNewQuestion = () => {
    if(avaialbleQuestions === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    /* adding this after choices.forEach to guide user to highscore page */

    /*Adding localStorage to scores */
    localStorage.setItem('mostRecentScore', score);

    /* ++ increment to 1 by adding ++ */
    questionCounter++;
    /* adding progressText.innerText */
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS)  * 100}%`; 

    /* Math.random to make sure questions are randomize */
    const questionIndex = Math.floor(Math.random() * avaialbleQuestions.length);
        currentQuestion = avaialbleQuestions[questionIndex];
        question.innerText = currentQuestion.question; 
    /* Adding innerText for display questions and answers */
    /* Question should generate according to JS on Game.html */
    /* Doing the same for answers */
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice' + number];
    });
    /* For not repeating same answers */
    avaialbleQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
/* testing */
/* console.log(e.taget) */
/* p class and data number is shown */
/* delete console.log(e.target) after testing or comment it out */

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;
        /* if not accepting answer, then we will return */
        acceptingAnswers = false;
        /* referring top top of JS. delaying line 14 */
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
/* number, use == instead of === */
        /*
        const classToApply = 'inccorect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        } */
        /* using one liner */
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
            /* booleans below so use === instead of == */
            if(classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }

        selectedChoice.parentElement.classList.add(classToApply);
        /*set time out */
        setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
        /* adding another selectedChoice to remove */
        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

/* Without this, it won't go anywhere */
/* Relocate at bottom */
startGame();
