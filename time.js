"use strict";
//kuemmert sich um die Zeitberechnung
var timer = document.getElementById("timer");
var time = 0;
var m = 0;
var s = 0;
var myInterval = 0;
function runTimer(){
    if(myInterval === -1) {
        myInterval = setInterval(function(){
            time++;
            if(s+1 >= 60){
                s = 0;
                m++;
            } else {
                s++;
            }
            timer.innerHTML = ((m>=10) ? m : "0" + m) + ":" + ((s>=10) ? s : "0" + s);
        }, 1000);
    } else {
        clearInterval(myInterval);
        myInterval = -1;
    }
}
//startet zeit
function startTimer(){
    myInterval = -1;
}
//wird verwendet um bei closeTimer aufgerufen um die Zeit zu stoppen
function stopTimer(){
    clearInterval(myInterval);
    myInterval = 0;
}

function closeTimer(){
    timer.style.display = 'none';
    stopTimer();
    return m*60+s;
}
//Zeit in Sekunden zurueck geben
function gettime(){
    return m*60+s;
}