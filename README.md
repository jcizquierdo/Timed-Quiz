# Timed-Quiz

For this Quiz I setup an HTML file a CSS file and four different .js files.

I setup my HTML to include a place where the questions and option buttons apppear as well as a css sheet which stlyed the whole quiz.

One .js file to hold the how the questions were going to be setup and to check for right answers.
Another to hold how the quiz will run and to keep score.
Another for the application itself for showing the quiz and option buttons.
Finally one for the timer that I did not have the time or knowledge to make it work.

I setup a Question function to hold the text, which is the question, the choices, which were the answer choices (buttons) and the answer of the quesiton.

Then I setup a Quiz function to hold the score the questions and the index for the array of questions I setup in the app.js file. In this same file I kept track of the score and incremented the index of questions by one using ++. I also setup the end function of the quiz.

Then I setup the app.js file with a variable that equaled the array for my questions. Then a populate function that included a if statement for when the quiz is over then an else statement to show the question and options on the screen, at the same time show the progress of the quiz, which I setup a function for after this function. Finally a showScores function that took you to the results page.

To be honest this was a very challenging challenge that I did not feel prepared for. Unfortunately I was not able to make my start button function, get the timer to work or set the local storage to recall the high scores.
