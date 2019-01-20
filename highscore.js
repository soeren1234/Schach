"use strict";
var hs = new Highscore();
hs.ausgabe();
function Highscore(){
    this.highscore = [];

    for (let i=0, ic = localStorage.length; i<ic; i++) {
        let storageKey = localStorage.key(i);
        var save = localStorage.getItem(storageKey).split(",");
        console.log(save);
        //var zeile = [storageKey, save[0], save[1]];
        //console.log(zeile);
        this.highscore[i] = [storageKey, save[0], save[1]];
        console.log(storageKey, save[0], save[1]);
        //this.highscore[i] = (storageKey + ' : ' + localStorage.getItem(storageKey));
        //console.log(this.highscore[i]);

    }

    Highscore.prototype.ausgabe = function(){
        console.log("ausgabe start");
        var print = "";


        for (var i= 0; i<this.highscore.length; i++){
            print = print + (i+1) + ". " + this.highscore[i][0] + " " + this.highscore[i][1] + " " + this.highscore[i][2] + "<br>";
            console.log(print);

            //print = print + (i+1) + ". " + this.highscore[i][0].toString() + this.highscore[i][1].toString() + this.highscore[i][2].toString() + "<br>";
        }
        /*
        for (var i= 0; i<localStorage.length; i++){
            print = print + (i+1) + ". " + this.highscore[i] + "<br>";
        }
        */
        document.getElementById('highscore1').innerHTML = print;
        console.log("ausgabe ende");
    };
}









