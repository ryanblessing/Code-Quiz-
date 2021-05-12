//my targets connecting me to HTML
var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var messageEl = document.getElementById('message');
var testDisplayEl = document.getElementsByClassName('#test-display');
var dataInputEl = document.getElementsByClassName('#storage');
var playerName = document.getElementById('email');
var playerScore = document.getElementById('score');
var questions = [
    {q: 'The DOM is built into the JavaScript Language.', a: 't'},
    {q: 'event.preventDefault() does not stop your page from resetting up submission.', a: 'f'},
    {q: 'The DOM event object refers to the HTML element that was interacted with to dispatch the event.', a: 't'},
    {q: 'Local.storage() does support saving arrays.', a: 't'}
];
 

//message after your done with quiz
var message =
'Congratulations on completing this quiz! hope you had fun!!'
var words = message.split(' ');


// set score to begin quiz with
var score = 0;

//loop to go from question to question
function start() {
for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);

    if (
        (answer === true && questions[i].a === 't') ||
       (answer === false && questions[i].a === 'f')
    ) {
        score++;
        alert('BANGARANGGGG!');
     } else{
        alert('RUUUFFIIIOOOOOO');
        timerEl--;
        }
      }
    };

//timer for quiz finished
function timer() {
    var timeLeft = 3;
    
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
//function to make the quiz pop up?
function displayQuiz() {
    testDisplay.className = 'testDisplay'
    testDisplayEl.setAttribute("test");
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

//function to retrieve values out of storage
function storage() {
    var playerName = localStorage.getItem('email');
    var playerScore = localStorage.getItem('score');
    if(playerName === null || playerScore === null) {
        return;
    }
    playerName.textContent = email;
    playerScore.textContent = score;
};

//local storage
localStorage.setItem('email', playerName);
localStorage.setItem('score', playerScore);

//calling storage function
//storage();


//create event listeners
startBtn.onclick = timer


