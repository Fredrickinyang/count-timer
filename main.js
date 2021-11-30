window.onload = function() {

    var minutes = 00
    var seconds = 00;
    var tens = 00;


    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var appendMinutes = document.getElementById('minutes');

    var buttonStart = document.getElementById('startBtn');
    var buttonPause = document.getElementById('pauseBtn');
    var buttonReset = document.getElementById('resetBtn');

    var interval;


    function startTimer() {
        tens++;
        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }

        if (seconds > 60) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }
    }


    // To start the timer
    buttonStart.onclick = function() {
        // clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    // To pause the timer
    buttonPause.onclick = function() {
        clearInterval(interval);
    }

    // To reset the timer
    buttonReset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }
}