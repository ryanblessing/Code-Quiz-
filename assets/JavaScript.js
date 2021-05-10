// questions for the quiz

// True or False
//1.)DOM is built into the JavaScript Language-T
//2.)event.preventDefault() doesnt stop your page from resetting up submission-F
//3.The DOm event object refers to the HTML element that was interacted
// with to dispatch the event-T
//4. Local.storage() does support saving arrays-F

//my targets connecting me to HTML
var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var questionsEl = [
    {q: 'The DOM is built into the JavaScript Language.', a: 't'},
    {q: 'event.preventDefault() doesnt stop your page from resetting up submission.', a: 'f'},
    {q: 'The DOM event object refers to the HTML element that was interacted with to dispatch the event.', a: 't'},
    {q: 'Local.storage() does support saving arrays.', a: 't'}
];

// set score to begin quiz with
var score = 0;

// loop to go from guestion to guestion
function startBtn() {
for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);
    console.log(i);

    if (
        (answer === true && questions[i].a === 't') ||
       (answer === false && questions[i].a === 'f')
    ){
        score++;
        alert('Correct!');
    } else{'Wrong'};
        timerEl--;
    }
};

//timer for quiz
function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        
        if (timeLeft >= 1) {
            timerEl.textContent = timeLeft + 'time remaining';
            timeLeft--;
        } 
        else if(timeLeft === 0) {
            timerEl.textContent = timeLeft = 'No Time Remaining';
            timeLeft--; 
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
            }
    },1000);
}

//message after your done with quiz
var message =
'Congradulations on completing this quiz! hope you had fun!!'
var words = message.split(' ');

startBtn.onclick = timer;