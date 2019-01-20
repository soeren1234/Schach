"use strict";
//var hs = new Highscore();

//hs.ausgabe();
var storage = window.localStorage.highscore;
var players = storage.split(";");

console.log(players);

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
var print = "";

for (var i= 0; i<((players.length>5)?5:players.length); i++){
    print = print + (i+1) + ". " + players[i] + "<br>";
    console.log(print);
}
print = "Rang Name, Zeit, KI-Punkte <br>"+ print;

document.getElementById('highscore1').innerHTML = print;
console.log("ausgabe ende");

console.log(players);




/*
function Highscore(){
    var storage = window.localStorage.highscore;
    var players = storage.split(";");

    for(var i= 0; i<players.length;i++){
        hs.sort(hs[i],players[i],);
    }

    Highscore.prototype.sort = function sort(a,b){
        var timeA = a.split(",")[1];
        var timeB = b.split(",")[1];

        if (timeA < timeB) {
            return -1;
        } else if (timeA > timeB) {
            return 1;
        } else {
            return 0;
        }
    }*/
    /*
    players.sort(function(a, b) {
        var timeA = a.split(",")[1];
        var timeB = b.split(",")[1];

        if (timeA < timeB) {
            return -1;
        } else if (timeA > timeB) {
            return 1;
        } else {
            return 0;
        }
    });
    */

    //console.log(this.players);
    /*
    for (let i=0, ic = localStorage.length; i<ic; i++) {
        var storageKey = localStorage.key(i);
        console.log(storageKey);
        var save = localStorage.getItem(storageKey).split(",");
        console.log(save);
        //var zeile = [storageKey, save[0], save[1]];
        //console.log(zeile);
        this.highscore[storageKey-1] = [storageKey, save[0], save[1],save[2]];
        console.log(storageKey, save[0], save[1],save[2]);
        //this.highscore[i] = (storageKey + ' : ' + localStorage.getItem(storageKey));
        //console.log(this.highscore[i]);

    }
    */
/*
    Highscore.prototype.ausgabe = function(){
        console.log("ausgabe start");
        var print = "";

        for (var i= 0; i<localStorage.length-1; i++){
            print = print+ this.players[i] + "<br>";
            //print = print + this.highscore[i][0] + ". " + this.highscore[i][1] + " " + ((this.highscore[i][2]/60>=1)?this.highscore[i][2]/60:"00") + ":" + (this.highscore[i][2]%60)+ " " + this.highscore[i][3] + "<br>";

            //print = this.highscore[i][0] + ". " + this.highscore[i][1] + " " + ((this.highscore[i][2]/60>=1)?this.highscore[i][2]/60:"00") + ":" + (this.highscore[i][2]%60)+ " " + this.highscore[i][3] + "<br>" + print;
            console.log(print);

            //print = print + (i+1) + ". " + this.highscore[i][0].toString() + this.highscore[i][1].toString() + this.highscore[i][2].toString() + "<br>";
        }
        print = "Rang Name Zeit KI-Punkte <br>"+ print;

        for (var i= 0; i<localStorage.length; i++){
            print = print + (i+1) + ". " + this.highscore[i] + "<br>";
        }

        document.getElementById('highscore1').innerHTML = print;
        console.log("ausgabe ende");
    };
}
*/









