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
];

  var answers = [];

//message after your done with quiz
var message =
'Congratulations on completing this quiz! hope you had fun!!'
var words = message.split(' ');


// set score to begin quiz with
var score = 0;

//loop to go from question to question and in form class
function quizAnswer(questions) {
            if (
                (answer === true && quiz[currentQuiz.index] === 't') ||
               (answer === false && quiz[currentQuiz.index] === 'f')
          ) {
                score++;
                alert('BANGARANGGGG!');
         } else{
                alert('RUUUFFIIIOOOOOO');
                timerEl-= 10;
                }
            };

 //get questions to display 
function getQuestions() {
    var currentQuiz = displayQuestions[currentQuiz.index]
//display the questions on the other page
    displayQuiz.textContent = currentQuiz.questions
//display the answers
    answer.innerHTML = ' '
    //create a button for the answer and append it to the quiz answers
    currentQuiz.answers.forEach(function(answer, index) {
       var choiceButton = document.createElement('button')
       choiceButton.setAttribute('class', 'choice')
       choiceButton.setAttribute ('value', answer)
       choiceButton.textContent = index + 1 + answer
       choiceButton.appendChild(choiceButton)

       choiceButton.onclick = quizAnswer
    });
}



    
//timer for quiz finished
function timer() {
    var timeLeft = 90;
    var timeInterval = setInterval(function(){ 

        if (timeLeft >= 1) {
            timerEl.textContent = timeLeft +' time remaining';
            timeLeft--;
        } 
        else if (timeLeft === 0) {
            timerEl.textContent = timeLeft + ' No Time Remaining';
            timeLeft--; 
        }
        else {
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
            displayMessage();
            }
    }, 1000);
}

//message for after the quiz is done
function displayMessage() {
    var wordCount = 0;
    var message = setInterval(function(){
        if (words[wordCount] === undefined) {
            clearInterval(message);
        } else {
            messageEl.textContent = words[wordCount];
            wordCount ++
        }
    }, 500); 
};


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



//Im aware that the code doesnt work, i couldnt figure out the way to make my questions pop up coorectly without it 
//coming up as a alert question, i will be coming back once i figure out my shortcomings to fix it and push it up to git