<<<<<<< HEAD
=======

>>>>>>> 0cb766204b6e82a3b178ad64efd25a81b51008f3
var quiz = [{
        question1: 'The DOM is built into the JavaScript Language.',
        choices: ["True", "False"],
        answer: 'True'
    },

    {
        question2: 'event.preventDefault() does not stop your page from resetting up submission.',
        choices: ["True", "False"],
        answer: 'False'
    },

    {
        question3: 'The DOM event object refers to the HTML element that was interacted with to dispatch the event.',
        choices: ["True", "False"],
        answer: 'True'
    },

    {
        question4: 'Local.storage() does support saving arrays.',
        choices: ["True", "False"],
        answer: 'True'
    }
<<<<<<< HEAD
=======
];
//element to start quiz
var startBtn = document.getElementById("start-quiz");
//answers element
var trueBtnEl = document.getElementById("trueBtn");
var falseBtnEl = document.getElementById("falseBtn");
//timer element
var timeDisplay = document.getElementById("timer");
var messageEl = document.getElementById('message');
var quizDisplay = document.getElementById('quiz-display');

document.addEventListener('DOMContentLoaded', () => {
    //variable
    const timeDisplay = document.getElementById("timer");
    const startBtn = document.getElementById("start-quiz");

    function timer() {
        var timeLeft = 40;
        var timeInterval = setInterval(function () {

            if (timeLeft >= 1) {
                timeDisplay.textContent = timeLeft + ' time remaining';
                timeLeft--;
            } else if (timeLeft === 0) {
                timeDisplay.textContent = timeLeft + ' No Time Remaining';
                timeLeft--;
            } else {
                timeDisplay.textContent = ' ';
                clearInterval(timeInterval);
                displayMessage = ''
            }
        }, 1000);
    }

    startBtn.addEventListener("click", timer)
})

//displaying the quiz and hiding before you start
function questionsDisplayBlock() {
    startBtn.onclick = function () {
        document.getElementById("questions").setAttribute("quiz", "hide")
        document.getElementById("start-quiz").removeAttribute("hide")
    }

    function startQuiz() {
        

        //question 1
        document.getElementById("questions").innerHTML = quiz[0].question1

        //answer
        document.getElementById("trueBtn").innerHTML = quiz[0].answer[0]
        document.getElementById("falseBtn").innerHTML = quiz[0].answer[1]

        document.getElementById("answers").addEventListener("click", question2)
        trueBtnEl.addEventListener("click", function () {
        falseBtnEl.addEventListener("click", function () {
            if(answer === false){
                timeLeft = -10
            } 
            })
        })
    };
    startQuiz()

    function question2() {
        document.getElementById("questions").innerHTML = quiz[1].question2

        document.getElementById("trueBtn").innerHTML = quiz[1].answer[0]
        document.getElementById("falseBtn").innerHTML = quiz[1].answer[1]

        document.getElementById("answers").addEventListener("click", question3)

    }

    function question3() {
        document.getElementById("questions").innerHTML = quiz[2].question3

        document.getElementById("trueBtn").innerHTML = quiz[2].answer[0]
        document.getElementById("falseBtn").innerHTML = quiz[2].answer[1]

        document.getElementById("answers").addEventListener("click", question4)


    };


function question4() {
    document.getElementById("questions").innerHTML = quiz[3].question4

    document.getElementById("trueBtn").innerHTML = quiz[3].answer[0]
    document.getElementById("falseBtn").innerHTML = quiz[3].answer[1]

    startBtn.addEventListener("click", startQuiz)

};
}


var message =
'Congratulations on completing this quiz! hope you had fun!!'
var words = message.split(' ');

function displayMessage() {
    var wordCount = 0;
    var message = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(message);
        } else {
            messageEl.textContent = words[wordCount];
            wordCount++
        }
    }, 500);
};

questionsDisplayBlock();

//my targets connecting me to HTML
var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var messageEl = document.getElementById('message');
var userEmailSpan = document.querySelector('user-email');
var userScoreSpan = document.querySelector('user-score');
var displayQuiz = document.querySelector('display-question');
var quiz = [
    {questions: 'The DOM is built into the JavaScript Language.', answer: 't'},
    {questions: 'event.preventDefault() does not stop your page from resetting up submission.', answer: 'f'},
    {questions: 'The DOM event object refers to the HTML element that was interacted with to dispatch the event.', answer: 't'},
    {questions: 'Local.storage() does support saving arrays.', answer: 't'}
>>>>>>> 0cb766204b6e82a3b178ad64efd25a81b51008f3
];
//element to start quiz
var startBtn = document.getElementById("start-quiz");
//answers element
var trueBtnEl = document.getElementById("trueBtn");
var falseBtnEl = document.getElementById("falseBtn");
//timer element
var timeDisplay = document.getElementById("timer");
var messageEl = document.getElementById('message');
var quizDisplay = document.getElementById('quiz-display');

document.addEventListener('DOMContentLoaded', () => {
    //variable
    const timeDisplay = document.getElementById("timer");
    const startBtn = document.getElementById("start-quiz");

    function timer() {
        var timeLeft = 40;
        var timeInterval = setInterval(function () {

            if (timeLeft >= 1) {
                timeDisplay.textContent = timeLeft + ' time remaining';
                timeLeft--;
            } else if (timeLeft === 0) {
                timeDisplay.textContent = timeLeft + ' No Time Remaining';
                timeLeft--;
            } else {
                timeDisplay.textContent = ' ';
                clearInterval(timeInterval);
                displayMessage = ''
            }
        }, 1000);
    }

    startBtn.addEventListener("click", timer)
})

//displaying the quiz and hiding before you start
function questionsDisplayBlock() {
    startBtn.onclick = function () {
        document.getElementById("questions").setAttribute("quiz", "hide")
        document.getElementById("start-quiz").removeAttribute("hide")
    }

    function startQuiz() {
        

        //question 1
        document.getElementById("questions").innerHTML = quiz[0].question1

        //answer
        document.getElementById("trueBtn").innerHTML = quiz[0].answer[0]
        document.getElementById("falseBtn").innerHTML = quiz[0].answer[1]

        document.getElementById("answers").addEventListener("click", question2)
        trueBtnEl.addEventListener("click", function () {
        falseBtnEl.addEventListener("click", function () {
            if(answer = false){
                timeLeft = -10
            } else(moveTo.function(question2))
            })
        })
    };
    startQuiz()

    function question2() {
        document.getElementById("questions").innerHTML = quiz[1].question2

        document.getElementById("trueBtn").innerHTML = quiz[1].answer[0]
        document.getElementById("falseBtn").innerHTML = quiz[1].answer[1]

        document.getElementById("answers").addEventListener("click", question3)

    }

    function question3() {
        document.getElementById("questions").innerHTML = quiz[2].question3

        document.getElementById("trueBtn").innerHTML = quiz[2].answer[0]
        document.getElementById("falseBtn").innerHTML = quiz[2].answer[1]

        document.getElementById("answers").addEventListener("click", question4)


    };


function question4() {
    document.getElementById("questions").innerHTML = quiz[3].question4

    document.getElementById("trueBtn").innerHTML = quiz[3].answer[0]
    document.getElementById("falseBtn").innerHTML = quiz[3].answer[1]

    startBtn.addEventListener("click", startQuiz)

};
}


var message =
'Congratulations on completing this quiz! hope you had fun!!'
var words = message.split(' ');

function displayMessage() {
    var wordCount = 0;
    var message = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(message);
        } else {
            messageEl.textContent = words[wordCount];
            wordCount++
        }
    }, 500);
};

<<<<<<< HEAD
questionsDisplayBlock();
=======

//show results

function renderLastScore(){
    var email = localStorage.getItem('user-email', email);
    var score = localStorage.getItem('user-score', score);

    if(email === null || score === null) {
        return;
    }

    userEmailSpan.textContent = email;
    userScoreSpan.textContent = score;
}

//create event listenersS
startBtn.onclick = timer


>>>>>>> 0cb766204b6e82a3b178ad64efd25a81b51008f3
