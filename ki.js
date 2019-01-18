function KI() {
    this.pusher = new Pusher(width*(3/4), height/2);
    this.points = 0;
    this.speedx = 0;
    this.speedy = 1;
    this.seitea;
    this.seiteb;
    this.seitec;
    this.richtungx = 0;
    this.richtungy = 0;

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
        this.x += this.richtungx;
        this.y += this.richtungy;

        /*
        seitea = this.x - width*(3/4);
        seiteb = this.y - height/2;
        seitec = Math.sqrt(seitea * seitea + seiteb* seiteb);




            if(puck.gety()<this.pusher.gety()){
                this.pusher.sety(this.pusher.gety()-this.speedy);
            } else {
                this.pusher.sety(this.pusher.gety()+this.speedy);
            }

            if(width/2 +24< this.x) {
                this.x = width/2 + 24;
            }

            seitea = this.x - width*(3/4);
            seiteb = this.y - height/2;
            seitec = Math.sqrt(seitea * seitea + seiteb* seiteb);
            */

    };

    KI.prototype.update = function() {

    };

    KI.prototype.draw = function(){
        this.pusher.draw();
    };
}