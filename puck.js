//Puck
function Puck (x,y) {
    this.x = x;
    this.y = y;
    this.richtungx = 0;
    this.richtungy = 0;
    this.speedx = 1;
    this.speedy = 1;
    this.seitea;
    this.seiteb;

    Puck.prototype.setx = function (x) {
        this.x = x;
    };

    Puck.prototype.sety = function (y) {
        this.y = y;
    };

    Puck.prototype.update = function() {
        seitea = this.x - mouseX;
        seiteb = this.y - mouseY;

        var seitec = Math.sqrt(seitea * seitea + seiteb* seiteb);

        context.beginPath();
        context.fillText(this.richtungx + " " + this.richtungy, 50, 30);
        context.closePath();

        if(0 >= seitec - 20-15) {
            this.richtungx = seitea/this.speedx;
            this.richtungy = seiteb/this.speedy;
        } else{

        }

        /*
        if(0 >= seitec - 20-15) {
            this.richtungx = -this.richtungx;
            this.richtungy= -this.richtungy;        }
        */

        if(this.x > width - a || this.x< a) {
            this.richtungx = -this.richtungx;
        }

        if(this.y > height - a || this.y < a){
            this.richtungy= -this.richtungy;
        }

        this.x += this.richtungx;
        this.y += this.richtungy;

    };

    Puck.prototype.speed = function(x,y) {
        this.richtungx = x;
        this.richtungy = y;
    };

    Puck.prototype.render = function () {
        context.beginPath();
        context.fillStyle = color4;
        context.shadowColor = color4;
        context.shadowBlur = shadowsize;
        context.arc(this.x, this.y, 15, 0, 2 * Math.PI, true);
        context.fill();
        context.closePath();
    };
}