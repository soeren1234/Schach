"use strict";

var canvas = document.querySelector("#canva");
var context = canvas.getContext("2d");

var canvasPos = getPosition(canvas);

//Spielfeld
var width = canvas.width;
var height = canvas.height;

//Startposition des Spielers
var mouseX = width*(1/4);
var mouseY = height*(1/2);

//varablen berechnen
//feld player1
var a = 20;
var b = height-a;
var c = width/2-24;

//Farben
var color1 = "#ffffff";
var color2 = "#FF1177";
var color3 = "#228DFF";
var color4 = "black";
var color5 = "#FFDD1B";
var shadowsize = 15;


canvas.addEventListener("mousemove", setMousePosition, false);


//Puck, Player und KI werden erstellt
var puck = new Puck(width/2,height/2);
var player = new Player();
var ki = new KI();
//Bestimmt wie lange das Spiel geht
var endpoints = 10;
//Counter zum einfuegen für Highscore
var count = 1;



//Funktion fuer den Startbutton, damit das Spiel startet
function start() {
    canvas.style.display = 'block';
    document.getElementById("soundoptions").style.display = 'block';
    document.getElementById("pause").style.display = 'block';

    player.setname(document.getElementById("name").value);

    document.getElementById("input").style.display = 'none';
    canvasPos = getPosition(canvas);
    startTimer();
    runTimer();
}

//Play/Pause vom Spiel - momentan nicht funktionsfähig
var pause=1;
function pauseplay(){
    if(pause===1){
        pause=0;
    } else {
        pause=1;
    }
}

update();

//Berechnung der Mauskoordinaten
function setMousePosition(e) {
    //mit berechnung das player1 in feld1 bleibt
    mouseX = (e.clientX - canvasPos.x<=c)?e.clientX - canvasPos.x:c;
    mouseY = (e.clientY - canvasPos.y<=b)?e.clientY - canvasPos.y:b;
    if(mouseX<=a||mouseY<=a){
        (mouseX <= a)? mouseX=a:mouseX;
        (mouseY <= a)? mouseY=a:mouseY;
    } else {

    }
    context.clearRect(0, 0, width, height);
    draw();
}

//Zeichnet das canvas
 function update() {
    context.clearRect(0, 0, width, height);
    draw();


    requestAnimationFrame(update);


}



window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

//Behebt Komplikationen beim scrollen der Seite
function updatePosition() {
    canvasPos = getPosition(canvas);
}

//zeigt die exakte Position des Elements
function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}

//gesamtes Canvas füllen
function draw() {
    if(player.getPoints()>= endpoints || ki.getPoints() >= endpoints){
        endgame();
    } else {
        //spielfeld
        drawfeld();
        puck.tor();
        if (puck.tor()){
            player.points();
        }

        puck.calc(player.getx(), player.gety(), ki.getx(), ki.gety());
        puck.update();
        puck.render();

        //puck.bremsen();
        //Spieler zeichnen;
        player.setx(mouseX);
        player.sety(mouseY);
        player.draw();

        //Sorgt dafuer das die KI sich nur bewegt wenn der Puck ueber ein drittel des Feldes ist
        if(puck.getx()>width*(1/3)){
            ki.move();
        } else {

        }

        ki.draw();

        //Punkte
        context.beginPath();
        context.font = "30px Arial";
        context.textAlign = 'center';
        context.fillText(player.getPoints() + "   " + ki.getPoints(), width/2, 30);
        context.closePath();
    }
}

//Objekt Schläger erstellen
function Pusher (x,y) {
    this.x = x;
    this.y = y;

    Pusher.prototype.setx = function (x) {
        this.x = x;
    };

    Pusher.prototype.sety = function (y) {
        this.y = y;
    };

    Pusher.prototype.getx = function () {
        return this.x;
    };

    Pusher.prototype.gety = function () {
        return this.y;
    };

    //Schläger zeichnen
    Pusher.prototype.draw = function () {
        context.beginPath();
        context.shadowColor = color2;
        context.shadowBlur = shadowsize;
        context.arc(this.x, this.y, 20, 0, 2 * Math.PI, true);
        context.fillStyle = color2;
        context.fill();
        context.closePath();
        context.beginPath();
        context.arc(this.x, this.y, 8, 0, 2 * Math.PI, true);
        context.lineWidth = 3;
        context.strokeStyle = color1;
        context.stroke();
        context.closePath();
    };
}

//zeichnet das Spielfeld
function drawfeld() {
    context.beginPath();
    context.shadowColor = color3;
    context.shadowBlur = shadowsize;
    context.fillStyle = color3;
    context.lineWidth = 8;
    context.strokeStyle = color3;
    context.fillRect(width/2-4, 0, 8, height*(1/4));
    context.fillRect(width/2-4, height*(3/4), 8, height*(1/4));
    context.arc(width/2, height/2, height*(1/4), 0, 2 * Math.PI, true);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(width/2, height/2, 10, 0, 2 * Math.PI, true);
    context.fill();
    //Tore
    context.beginPath();
    context.shadowColor = color5;
    context.shadowBlur = shadowsize;
    context.strokeStyle = color5;
    context.arc(0, height/2, height*(1/8), 0, 2 * Math.PI, true);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(width, height/2, height*(1/8), 0, 2 * Math.PI, true);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = color5;
    context.fillRect(0, (height/2)-height*(1/8), 10, height*(2/8));
    context.fillRect(width-10, (height/2)-height*(1/8), 10, height*(2/8));
    context.fill();
    context.closePath();
}

//
function endgame() {
    //sorgt dafuer das die Zeit nicht weiter laeuft nachdem das Spiel beendet wurde
    closeTimer();
    canvas.style.display = 'none';
    document.getElementById("soundoptions").style.display = 'none';

    //bestimmt was passiert wenn Spieler oder KI gewinnt
    if(player.getPoints()>=endpoints){
        document.getElementById("text1").innerHTML = player.getname() + "&nbsp";
        document.getElementById("text2").innerHTML = "Win" + "<br>";
        document.getElementById("text3").innerHTML = "Zeit: " + ((gettime()/60>=1)?parseInt(gettime()/60):"00") +":" + (gettime()%60)+ " KI-Punkte: " + ki.getPoints();

        if(count ===1){
            var storage1 = window.localStorage.highscore;
            if (storage1.length > 0) {
                storage1 = storage1 + ";";
            }
            storage1 = storage1 + player.getname() + "," + gettime() + "," + ki.getPoints();
            localStorage.setItem("highscore", storage1);
            count=0;
        }

    } else if(ki.getPoints()>=endpoints){
        document.getElementById("text1").innerHTML = "Game&nbsp;";
        document.getElementById("text2").innerHTML = "Over";
    }

    document.getElementById("text1").style.display = 'block';
    document.getElementById("text2").style.display = 'block';
    document.getElementById("neustart").style.display = 'block';
}