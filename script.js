// Creating variables from HTML
var start = document.querySelector(".start"); // start button
var timeEl = document.querySelector(".time"); // timer
var welcome = document.querySelector(".home") // first page shown
var quizSpace = document.querySelector(".quizArea"); // area where quiz takes place
var endGame = document.querySelector(".endOfGame"); // page shown @ end of game
var highScoreLink = document.querySelector(".highScoreLink"); // View highscores link in header
var highScoreSpace = document.getElementById("highScoreSpace"); // highscore @ end of game
var questionArea = document.querySelector(".quiz-questions"); // where quiz questions will be shown
var answerArea = document.querySelector(".answers")


//Game Variables
var score = 0;
var secondsLeft = 0;
var questions = [];
var randomNum = 0;
var highScores;

// Pulling highscores stored in local storage
if(localStorage.getItem("highScores") === null) {
  highScores = [];
} else {
  highScores = JSON.parse(localStorage.getItem("highScores"));
}

// setting up what happens when game starts
start.addEventListener("click", startGame);

function startGame() {
secondsLeft = 5;
score = 0;
endGame.innerHTML = "";
welcome.style.display = "none";
quizSpace.style.display = "flex";
arrayReset();
writeQuestion();
}

//The array of questions
var questionsQuiz = [
  {
    question: "Who was the first MVP in franchise history?",
    answers: ["Steve Smith", "Christian McCaffrey", "Cam Newton", "Charles Johnson"],
    correct: "Cam Newton"
  },
  {
    q: "Who did the Panthers draft ninth overall in 2012?",
    answers: ["Luke Kuechly", "Greg Olsen", "Steve Smith", "Julius Peppers"],
    correct: "Luke Kuechly"
  },
];

// function to reset the array so questions get removed as game progresses
function arrayReset() {
  for(var i = 0; i < questionsQuiz.length; i ++) {
    questions[i] = questionsQuiz[i];
  }
}

// creating a button event listener function
start.addEventListener("click", function (setTime) {
  // creating a countdown that starts when button is clicked
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        endOfGame();
      }
    }, 1000);
  }
  setTime();
});


// what shows at the end of the game
function endOfGame () {

}

