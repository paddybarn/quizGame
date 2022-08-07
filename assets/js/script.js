//Instructions//

//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

var timerEl = document.querySelector(".countdown");
var startButton = document.querySelector(".startButton");


                           //Game intro and username input//
function intro(){
    alert("Test your Formula 1 knowledge\! You have 100 seconds to race through this 10 question quiz about Formula 1 facts\.  Wrong answers will deduct remaining time, and cause a wreck\!  Got what it takes?\?  See how your track time ranks among the high scores\.  Please log your username\!");
}

function userInfo(){
    var username= prompt("Enter initials for username")
    localStorage.setItem("user", username);
}

function startGame(){
    alert("Press \"Start!\" for lights out and begin the game!")
}

function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;

        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;

        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }

    }, 1000)
}

addEventListener("load", intro)
addEventListener("load", userInfo)
addEventListener("load", startGame)
startButton.addEventListener("click", countdown)