var timer;
var timeLeft = 60; // seconds
var typeCount = 0;

// What to do when the timer runs out
function gameOver() {
    // This cancels the setInterval, so the updateTimer stops getting called
    cancelInterval(timer);

    // re-show the button, so they can start it again
    $('#playAgainButton').show();
}

function updateTimer() {
    timeLeft = timeLeft - 1;
    if (timeLeft >= 0)
        $('#timer').html(timeLeft);
    else {
        gameOver();
    }
}

// The button has an on-click event handler that calls this
function start_it() {
    // setInterval is a built-in function that will call the given function
    // every N milliseconds (1 second = 1000 ms)
    var timer = setInterval(updateTimer, 1000);
    document.getElementById("timer").innerHTML = timer;
   
    updateTimer();

    // We don't want the to be able to restart the timer while it is running,
    // so hide the button.
    $('#playAgainButton').hide();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

 if (keyPressed == '32') {
    spacebar();
    console.log("spacebar");
}

    function spacebar() {
        typeCount = typeCount + 1;
        document.getElementById("score").innerHTML = typeCount;
    }

    function win() {
        if (typeCount >= 300 && start == 60000) {
            document.getElementById("results").innerHTML = "<label>You Win</label>";
        }
        else (){
            document.getElementById("results").innerHTML = "<label>You Lose</label>";
        }
    }