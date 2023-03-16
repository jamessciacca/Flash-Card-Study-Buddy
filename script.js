/*Flash Card App*/ 

//when page loads, show user a start button! ✓
var cardDisplay = document.querySelector('.card-display');
var questionDisplay = document.querySelector('#question-display');
var timerDisplay = document.querySelector('#timer-display');
var answerDisplay = document.querySelector('#answer-display');
var startBtn = document.querySelector('#start');
var nextBtn = document.querySelector('#next');
var currentCardIndex = 0;
// create a variable to store the current timer count 
var count = 5;
//create a variable that will hold the current card object
var card;

//Function called when the end of the cards array is reached that prompts user to restart
function promptUserToRestart(){
    var userChoice = confirm('Would you like to restart?');

    if(userChoice){
        //this will start the whole thing over from the first card
        displayCard();
    }else{
        questionDisplay.innerText ='Have a great day!';
        answerDisplay.classList.add('hide');
        nextBtn.classList.add("hide");
        startBtn.classList.remove('hide');
    }
    }


//create a function that starts a timer at five seconds and counts down to zero, then 
//calls showAnswer
function showAnswer(){
    card = cards[currentCardIndex];
    answerDisplay.innerText = card.answer;
    timerDisplay.classList.add('hide');
    nextBtn.classList.remove('hide');
    answerDisplay.classList.remove('hide');

    currentCardIndex++;



    if(currentCardIndex === cards.length){
        //reset card tracking values
        currentCardIndex = 0;
        nextBtn.classList.add('hide');


        promptUserToRestart();
    }

    //if the current card index is equal to the cards array length then we stop flashcard and confirm
    //if the user would like to restart
}

function startTimer(){
    timerDisplay.classList.remove("hide");
    timerDisplay.innerText = '5';
    // create a set interval and store it to a variable that triggers every second
    var timer = setInterval(function() {
        //decrease count by 1, set countDisplay to the count variable and reset count to 5!
        count--;
        timerDisplay.innerText = count;
        if(!count){
            clearInterval(timer);
            count = 5;
            showAnswer();
        }



    }, 1000);//this is 1000 milliseconds times 


}


function displayCard(){
    //create a variable reference to the current card object from the array
    // grab the current card object from cards array
    card = cards[currentCardIndex];
    cardDisplay.classList.remove('hide');
    questionDisplay.innerText = card.question;
    answerDisplay.classList.add("hide");
    nextBtn.classList.add("hide");
    startTimer();
}


//hide the start button and call display card 
function startFlashCards(){
    // adds the hide style 
    startBtn.classList.add('hide');
    displayCard();
    
}

startBtn.addEventListener('click', startFlashCards);
nextBtn.addEventListener('click', displayCard);
//when user clicks start button, show the first flashcard
    //Show card question and start a 5 second timer
    //create a variable to track current card index
    
    //create a function that grabs the current card object and displays 
    //the question to the window.  
    //when time expires, show the answer
    //show a next button to allow the user to transition to the next card

//when the end of the card array has been reached, show the user a confirmation 
//asking if they would like to restart the flash cards from the beginning
    //if they confirm yes then reset card index to 0 and show first card
    //if they confirm no show a goodbye message

