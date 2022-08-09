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

  //html elements tied to variables in js file
const timerEl = document.querySelector(".countdown");
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit");
const results = document.getElementById("results")
const resultList=document.getElementById("resultList")
const reload = document.getElementById("reload")

//globally declared variables
var usernameArray = []
var username = ""
var timeLeft = 50
let currentQuiz = 0
let highscore = 0

//array of each question stored as objects in an array in this variable
const quizData = [
    {
        question: "Which compound tire yields the most grip?",
        a: "Soft",
        b: "Medium",
        c: "Hard",
        d: "Full Wets",
        correct: "a",
    },
    {
        question: "Who is the greatest driver of all time?",
        a: "Michael Schumaker",
        b: "Joe Burrow",
        c: "Nicholas Latifi",
        d: "Lewis Hamilton",
        correct: "c",
    },
    {
        question: "Is Formula 1 rigged?",
        a: "yes",
        b: "no",
        c: "absolutely!",
        d: "duh",
        correct: "d",
    },
    {

        question: "How much did Lando Norris's watch cost?",

        a: "one BILLION dollars",
        b: "$200,000",
        c: "one dollar Bob",
        d: "two dollars Bob",
        correct: "b",
    },
    {
        question: "Which team is going to dominate the 2022 World Championship?",
        a: "Red Bull",
        b: "Williams",
        c: "Prius",
        d: "Definitely not Ferrari",
        correct: "a",
    },

];


//Game intro//
function intro() {
    alert("Test your Formula 1 knowledge\! You have 50 seconds to race through this 5 question quiz about Formula 1 facts\.  Wrong answers will deduct remaining time, and cause a wreck\!  Got what it takes?\?  See how your track time ranks among the high scores\.  Please log your username\!");
}

//Enter username
function userInfo() {
    username = prompt("Enter initials for username")
    localStorage.setItem(username, 0);
}

//start the game
function startGame() {
    alert("Press \"Start!\" for lights out and begin the game!")
    countdown()
    timeLeft= 50
    loadQuiz()
}


function countdown() {
    //timer function
    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;

        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;

        } else {
            //cleared time
            timerEl.textContent = '';
            clearInterval(timeInterval);
            //storing and displaying username and score if time runs out
            localStorage.setItem(username, timeLeft)
            var result= ""
            for (i = 0; i < localStorage.length; i++) {
                var userName = localStorage.key(i)
                var highScore = localStorage.getItem(userName)
                result += userName + "   " + highScore
            }
            results.innerText = result
            //switching submit button to reload button
            submitBtn.style.display = "none"
            reload.style.display = "block"
            //reset quiz to question 1 on reload
            currentQuiz= 0
        }

    }, 1000)
}
//run the quiz and display objects over html elements  
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
//resests checked answer
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
//selects correct answer
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

//submit button function
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer == quizData[currentQuiz].correct) {

        } else {
            //deducts time if wrong answer selected
            timeLeft -= 5
        }

        currentQuiz++
        //when the last question is answered resets quiz
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            //stores username and score
            localStorage.setItem(username, timeLeft)
            //displays username and high score
            var result= ""
            for (i = 0; i < localStorage.length; i++) {
                var userName = localStorage.key(i)
                var highScore = localStorage.getItem(userName)
                result += "(" + userName + "   " + highScore + ")"
                
            }
            results.innerText= result

            //brings reload button into visible display
            submitBtn.style.display = "none"
            reload.style.display = "block"
            results.style.display = "block"
            //resets quiz to question 1
            currentQuiz= 0

        }
    }
})

//reloads quiz after game is completed
reload.addEventListener("click", () => {
    intro()
    userInfo()
    startGame()
    //brings submit button back to visible on the page
    submitBtn.style.display = "block"
    reload.style.display = "none"
    results.style.display = "none"

})
//beginning prompts
addEventListener("load", intro)
addEventListener("load", userInfo)
addEventListener("load", startGame)