"use strict";
//localSotrage laden
var storage = window.localStorage.highscore;
var players = storage.split(";");

console.log(players);

//local Storage sortieren
players.sort(function(a, b) {
    var timeA = parseInt(a.split(",")[1]);
    var timeB = parseInt(b.split(",")[1]);

    if (timeA < timeB) {
        console.log(timeA + "<" + timeB);
        return -1;
    } else if (timeA > timeB) {
        console.log(timeA + ">" + timeB);
        return 1;
    } else {
        console.log(timeA + "=" + timeB);
        return 0;
    }
});
console.log(players);

console.log("ausgabe start");
//Highscoreausgabe basteln
var print = "";
for (var i= 0; i<((players.length>5)?5:players.length); i++){
    print = print + (i+1) + ". " + players[i] + "<br>";
    console.log(print);
}
print = "Rang Name, Sekunden, KI-Punkte <br>"+ print;

//Highscore in HTML ausgeben
document.getElementById('highscore1').innerHTML = print;
console.log("ausgabe ende");