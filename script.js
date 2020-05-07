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
secondsLeft = 30;
score = 0;
endGame.innerHTML = "";
welcome.style.display = "none";
quizSpace.style.display = "flex";
arrayReset();
questionRandomizer();
setTime();
}

//The array of questions
var questionsQuiz = [
  {
    question: "Who was the first MVP in franchise history?",
    answers: ["Steve Smith", "Christian McCaffrey", "Cam Newton", "Charles Johnson"],
    correct: "Cam Newton"
  },
  {
    question: "Who did the Panthers draft ninth overall in 2012?",
    answers: ["Luke Kuechly", "Greg Olsen", "Steve Smith", "Julius Peppers"],
    correct: "Luke Kuechly"
  },
  {
    question: "What is the name of the Panthers mascott?",
    answers: ["Prowler", "Catty", "Sir Purr", "Pounce"],
    correct: "Sir Purr"
  },
  {
    question: "Which Panthers player was the first to have his jersey retired?",
    answers: ["Julius Peppers", "Cam Newton", "Jake Delhomme", "Sam Mills"],
    correct: "Sam Mills"
  },
  {
    question: "What year did the Panthers play their first game?",
    answers: ["1995", "1985", "1996", "1986"],
    correct: "1995"
  },
  {
    question: "Who was the Carolina Panthers very first draft pick?",
    answers: ["Rae Carruth", "Tre Boston", "Thomas Davis", "Kerry Collins"],
    correct: "Kerry Collins"
  },
  {
    question: "Who is the current owner of the Carolina Panthers?",
    answers: ["David Tepper", "Jerry Richardson", "Jerry Jones", "Gayle Benson"],
    correct: "David Tepper"
  },
  {
    question: "What was the Panthers record in their first season?",
    answers: ["12-4", "3-13", "7-9", "5-11"],
    correct: "7-9"
  },
  {
    question: "Who was the first head coach of the Carolina Panthers?",
    answers: ["Ron Rivera", "John Fox", "Dom Capers", "Matt Rhule"],
    correct: "Dom Capers"
  },
  {
    question: "What year did the panthers go to their second Super Bowl",
    answers: ["2016", "2010", "2014", "2017"],
    correct: "2016"
  }
];

// function to reset the array so questions get removed as game progresses
function arrayReset() {
  for(var i = 0; i < questionsQuiz.length; i ++) {
    questions[i] = questionsQuiz[i];
  }
}


  // creating a countdown that starts when button is clicked
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        endOfGame();
      } 
    }, 1000);
  }
 

// function for questions
function questionRandomizer () {
// clearing out area so more questions can appear
questionArea.innerHTML = "";
answerArea.innerHTML = "";
// choosing a random question
randomNum = Math.floor(Math.random() * questions.length);
// adding the question to the page
var questionh1 = document.createElement("h1");
questionh1.textContent = questions[randomNum].question;
questionArea.appendChild(questionh1);

// loop for what question to add
for(var i = 0; i < questions[randomNum].answers.length; i++){
  var questionBtn = document.createElement("button");
  questionBtn.classList.add("answerBtn");
  questionBtn.textContent = questions[randomNum].answers[i];
// checking if the answer is right
questionBtn.addEventListener("click", answerChecker);
answerArea.appendChild(questionBtn);
}
}

// checking the answer
function answerChecker() {
if(event.target.textContent === questions[randomNum].correct) {
  score++;
} else {
  secondsLeft -= 5;
}
//removing the question from the array so it doesn't get repeated
questions.splice(randomNum, 1);
if(questions.length === 0) {
  secondsLeft = 0;
} else {
  questionRandomizer();
}
}

// what shows at the end of the game
function endOfGame() {
endGame.style.display = "flex";
quizSpace.style.display = "none"; // clearing out the display
// Clearing out the timer and setting the seconds remaining to 0
secondsLeft = 0;
timeEl.textContent = "Timer:";
// creating end game header
var headingEnd = document.createElement("h1");
headingEnd.textContent = "Quiz is over!";
endGame.appendChild(headingEnd);

// showing end score of user
var userScore = document.createElement("h2");
userScore.textContent = "Your score was: " + score;
endGame.appendChild(userScore);
// creating a play again button
var endBtnDivEl = document.createElement("div");
endBtnDivEl.classList.add("end-btn-div");
endGame.appendChild(endBtnDivEl);
var playAgainBtn = document.createElement("button");
playAgainBtn.classList.add("end-btn");
playAgainBtn.textContent = "Play Again";
playAgainBtn.addEventListener("click", startGame);
endBtnDivEl.appendChild(playAgainBtn);
}

