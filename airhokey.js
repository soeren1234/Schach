"use strict";
var canvas = document.querySelector("#canva");
var context = canvas.getContext("2d");

var canvasPos = getPosition(canvas);

var width = canvas.width;
var height = canvas.height;

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

var puck = new Puck(width/2,height/2);
var player = new Player();
var ki = new KI();
var endpoints = 1;
/*
var check;
player.setname('PLayer1');
do{
    check = prompt('Geben sie einen Namen ein', '');
    player.setname(check);
}while(check.length === 0);
*/

function start() {
    canvas.style.display = 'block';

    player.setname(document.getElementById("name").value);

    document.getElementById("input").style.display = 'none';
    canvasPos = getPosition(canvas);
    startTimer();
    runTimer();
}

update();

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

function update() {
    context.clearRect(0, 0, width, height);
    draw();
    requestAnimationFrame(update);
}

window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition() {
    canvasPos = getPosition(canvas);
}

// Helper function to get an element's exact position
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

    if(player.getPoints()>=endpoints || ki.getPoints() >= endpoints){
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
        //Spieler eins zeichnen;
        player.setx(mouseX);
        player.sety(mouseY);
        player.draw();

        ki.move();

        //Spieler 2 zeichnen
        ki.setx(width*(3/4));
        //ki.sety(height/2);
        ki.draw();

        //Punkte
        context.beginPath();
        context.font = "30px Arial";
        context.textAlign = 'center';
        context.fillText(player.getPoints() + "   " + ki.getPoints(), width/2, 30);
        context.closePath();
    }

}

//Schläger zeichnen
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

function Player() {
    this.pusher = new Pusher(mouseX,mouseY);
    this.points = 0;
    this.name = "";

    Player.prototype.setx = function (x) {
        this.pusher.setx(x);
    };

    Player.prototype.sety = function (y) {
        this.pusher.sety(y);
    };

    Player.prototype.getx = function () {
        return this.pusher.getx();
    };

    Player.prototype.gety = function () {
        return this.pusher.gety();
    };

    Player.prototype.setname = function(name){
        this.name = name;
    };

    Player.prototype.getname = function() {
        return this.name;
    };

    Player.prototype.getPoints = function() {
        return this.points;
    };

    Player.prototype.addpoint = function() {
        this.points++;
    };

    Player.prototype.draw = function () {
        this.pusher.draw();
    };
}

function KI() {
    this.pusher = new Pusher(width*(3/4), height/2);
    this.points = 0;
    this.speedx = 0;
    this.speedy = 1;

    KI.prototype.setx = function (x) {
        this.pusher.setx(x);
    };

    KI.prototype.sety = function (y) {
        this.pusher.sety(y);
    };

    KI.prototype.getx = function(){
        return this.pusher.getx();
    };

    KI.prototype.gety = function(){
        return this.pusher.gety();
    };

    KI.prototype.getPoints = function() {
        return this.points;
    };

    KI.prototype.addpoint = function(){
        this.points++;
    };

    KI.prototype.move = function() {

        if(puck.gety()<this.pusher.gety()){
            this.pusher.sety(this.pusher.gety()-this.speedy);
        } else {
            this.pusher.sety(this.pusher.gety()+this.speedy);
        }

        if(width/2 +24< this.x) {
            this.x = width/2 + 24;
        }
    };

    KI.prototype.update = function() {


    };

    KI.prototype.draw = function(){
        this.pusher.draw();
    };
}

/*
function TIME() {
    this.title = document.getElementById("timer");
    this.time = 0;

    TIME.prototype.

}
*/
//zeichnet das Spielfeld
function drawfeld() {
    //Hintergrund
    /*
    context.beginPath();
    context.fillStyle = color1;
    context.fillRect(0,0,width,height);
    context.fill();
    context.closePath();
    */
    //Mittellienen
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

function endgame() {
    context.fillText(player.getPoints() + "   " + ki.getPoints(), width/2, 30);
    if(player.getPoints()>=endpoints){
        context.fillText(player.getname() ,width/2, height/2);
    } else if(ki.getPoints()>=endpoints){
        context.fillText("GAME OVER" ,width/2, height/2);
    }
    canvas.style.display = 'none';
    if(player.getPoints()>=endpoints){
        document.getElementById("text1").innerHTML = player.getname() + "&nbsp";
        document.getElementById("text2").innerHTML = "Win";
    } else if(ki.getPoints()>=endpoints){
        document.getElementById("text1").innerHTML = "Game&nbsp;";
        document.getElementById("text2").innerHTML = "Over";
    }
    closeTimer();
    document.getElementById("text1").style.display = 'block';
    document.getElementById("text2").style.display = 'block';

}