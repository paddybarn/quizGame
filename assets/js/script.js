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
var questionElement = document.querySelector(".Question")
var answerElement = document.getElementById("Answers")

//array of each question to be stored in the browser
var quizArray = [
    {
        question: "Which compound tire yields the most grip?",
            a: "Soft",
            b: "Medium",
            c: "Hard",
            d: "Full Wets",
            correctAnswer: "a"
    },
    {
        question: "Who is the greatest driver of all time?",
            a: "Michael Schumaker",
            b: "Joe Burrow",
            c: "Nicholas Latifi",
            d: "Lewis Hamilton",
            correctAnswer: "c"
    },
    {
        question: "Is Formula 1 rigged?",
            a: "yes",
            b: "no",
            c: "absolutely!",
            d: "duh",
            correctAnswer: "d"
    },
    {
        
        question: "How much did Lando Norris's watch cost?",
        
            a: "one BILLION dollars",
            b: "$200,000",
            c: "one dollar Bob",
            d: "two dollars Bob",
            correctAnswer: "b"
    },
    {
        question: "Which team is going to dominate the 2022 World Championship?",
            a: "Red Bull",
            b: "Williams",
            c: "Prius",
            d: "Definitely not Ferrari",
            correctAnswer: "a"
    },

];


//Game intro and username input//
function intro() {
    alert("Test your Formula 1 knowledge\! You have 50 seconds to race through this 5 question quiz about Formula 1 facts\.  Wrong answers will deduct remaining time, and cause a wreck\!  Got what it takes?\?  See how your track time ranks among the high scores\.  Please log your username\!");
}

function userInfo() {
    var username = prompt("Enter initials for username")
    localStorage.setItem("user", username);
}

function gameInfo() {
    alert("Press \"Start!\" for lights out and begin the game!")
}

function countdown() {
    var timeLeft = 50;

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

function startGame() {
    countdown()
    qAndA()
}

function qAndA() {
    for (i = 0; i < quizArray.length; i++) {
        var quizObject = quizArray[i]
        questionElement.textContent = quizObject.question
        for (j = 0; j < quizArray.length; j++) {
            answerElement.textContent = quizObject.answers
        }
    }
}

addEventListener("load", intro)
addEventListener("load", userInfo)
addEventListener("load", gameInfo)
startButton.addEventListener("click", startGame)