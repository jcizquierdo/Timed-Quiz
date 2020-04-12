// debugger;

function start() {
    var startHTML = "<h1>Coding Quiz</h1>";
    startHTML += "<h2 id='score'>Try to answer the following code related questions within the time-limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = startHTML;
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "Start Quiz!";
    
    document.body.appendChild(startBtn);
    // startBtn.onclick = function() {
        
    // }
}
    
    // startBtn.addEventListener("click", function() {populate()})


// function timer() {
//     var timeLeft = 60;

//     var 
// }





function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};




function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    // new Question("Try to answer the following code related questions within the time-limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!", ["START", "START", "START", "START"], "START",
    new Question("Commonly used data types DO NOT include", ["strings", "booleans","alerts", "numbers"], "alerts"),
    new Question("The condition in an if/else statement is enclosed within _____. ", ["quotes", "curly brackets", "parantheses", "square brackets"], "parantheses"),
    new Question("Arrays in JavaScript can be used to store _____. ", ["numbers and strings", "other arrays","booleans", "all of the above"], "all of the above"),
    new Question("String values must be enclosed within _____ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parantheses"], "quotes"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is: ", ["JavaScript", "terminal/bash", "for loops", "console.log"], "console.log")
];


// create quiz
var quiz = new Quiz(questions);

start();

// display quiz
populate();
