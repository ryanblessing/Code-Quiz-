//my targets connecting me to HTML
var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var questions = [
    {q: 'The DOM is built into the JavaScript Language.', a: 't'},
    {q: 'event.preventDefault() doesnt stop your page from resetting up submission.', a: 'f'},
    {q: 'The DOM event object refers to the HTML element that was interacted with to dispatch the event.', a: 't'},
    {q: 'Local.storage() does support saving arrays.', a: 't'}
];
 

//message after your done with quiz
var message =
'Congradulations on completing this quiz! hope you had fun!!'
var words = message.split(' ');


// set score to begin quiz with
var score = 0;

// loop to go from guestion to guestion
function startBtn() {
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

//timer for quiz
var timerEl = function() {
    var timeLeft = 60;
    var timeInterval = setInterval(function(){ 
        
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft +'time remaining ';
            timeLeft--;
        } 
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + 'No Time Remaining';
            timeLeft--; 
        }
        else {
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
            displayMessage();
            }
    }, 1000);
}

startBtn.onclick = timerEl
