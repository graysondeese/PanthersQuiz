// creating all the variables
var start = document.querySelector(".start");
var timeEl = document.querySelector(".time");

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
