"use strict";

var time = 0;
var running = 0;

function switchButton() {
    if (running == 0) {
        running = 1;
        inc();
        document.getElementById('switchButton').innerHTML = 'Пауза';
        document.getElementById('switchButton').setAttribute("class", "btn-warning");
    } else {
        running = 0;
        document.getElementById('switchButton').innerHTML = 'Продолжить';
        document.getElementById('switchButton').setAttribute("class", "btn-success");
    }
}

function resetButton() {
    running = 0;
    time = 0;
    document.getElementById('switchButton').innerHTML = 'Старт';
    document.getElementById('switchButton').setAttribute("class", "btn-success");
    document.getElementById('timer').innerHTML = '0:00:00.00';
}

function inc() {
    if (running == 1) {
        setTimeout(function () {
            time++;
            var hours = Math.floor(time / 10 / 60 / 60);
            var mins = Math.floor(time / 10 / 60);
            var secs = Math.floor(time / 10 % 60);
            var milisec = time % 10;
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById('timer').innerHTML = hours + ":" + mins + ":" + secs + "." + milisec + "0";
            inc();
        }, 100)
    }
}