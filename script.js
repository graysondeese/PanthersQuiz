// creating all the variables
var start = document.querySelector(".start");
var timeEl = document.querySelector(".time");
var questionEl = document.createElement("h1");
var answerEl = document.createElement("p");

// creating a button
start.addEventListener("click", function(setTime) {
// creating a countdown that starts when button is clicked
    var secondsLeft = 100;
    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = "Time: " + secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1000);
      }
      setTime();
// making it so questions pop up when the button is clicked

})

var count = 0;
//The array of questions
var questions = [
  {
    q: "Who was the first MVP in franchise history?",
    a:  "Cam Newton"
  },
  {
    q: "Who did the Panthers draft ninth overall in 2012?",
    a: "Luke Kuechly, Greg Olsen, Steve Smith, Julius Peppers",
    correct: "Luke Kuechly",
  },
]

//Looping every question in the object
for (let i = 0; i < array.length; index++) {

  var answer = confirm(questions[i].q);
  
}

// function nextQuestion() {
//   if(count === 0) {

//   }
// }