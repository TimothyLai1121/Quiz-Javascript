const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn")

/* learn disabled for html and js */
/* add localStorage to game js and back end */
/* console => storage  => local storage => scores */
 
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
finalScore.innerText = mostRecentScore;

/* continues */ 

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked to sve button!");
    e.preventDefault();
};


/* window.location */
/* javascript does not link to end page */

console.log(window.location.href); 
console.log(window.location.hostname); 
console.log(window.location.pathname); /* assets/scripts/end.html */
console.log(window.protocol);
console.log(window.location.assign());

/* trying to link based on console */
