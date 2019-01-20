"use strict";
//Objekt Spieler erstellen
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