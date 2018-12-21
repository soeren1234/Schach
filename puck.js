//Puck
function Puck (x,y) {
    this.x = x;
    this.y = y;
    this.richtungx = 0;
    this.richtungy = 0;
    this.speedx = 1/4;
    this.speedy = 1/4;
    this.seitea;
    this.seiteb;
    this.seitec;

    Puck.prototype.getx = function(){
        return this.x;
    };

    Puck.prototype.gety = function(){
        return this.y;
    };

    Puck.prototype.setx = function (x) {
        this.x = x;
    };

    Puck.prototype.sety = function (y) {
        this.y = y;
    };

    Puck.prototype.update = function() {
        //this.calc(mouseX,mouseY);

        if(this.x > width - a || this.x < a) {
            this.richtungx = -this.richtungx;
        }

        if(this.y > height - a || this.y < a){
            this.richtungy= -this.richtungy;

        }

        this.x += this.richtungx;
        this.y += this.richtungy;
    };

    Puck.prototype.calc = function(x1,y1,x2,y2) {
        seitea = this.x - x1;
        seiteb = this.y - y1;
        seitec = Math.sqrt(seitea * seitea + seiteb* seiteb);

        if(0 >= seitec - 20-15) {
            this.richtungx = seitea*this.speedx;
            this.richtungy = seiteb*this.speedy;
        } else{
            seitea = this.x - x2;
            seiteb = this.y - y2;
            seitec = Math.sqrt(seitea * seitea + seiteb* seiteb);
            if(0 >= seitec - 20-15) {
                this.richtungx = seitea*this.speedx;
                this.richtungy = seiteb*this.speedy;
            } else {

            }

        }

        context.beginPath();
        context.fillText(this.richtungx + " " + this.richtungy, 50, 30);
        context.closePath();
    };

    Puck.prototype.speed = function(x,y) {
        this.richtungx = x;
        this.richtungy = y;
    };

    Puck.prototype.tor = function() {
        if(this.x < width/2){
            if(this.y >= (height/2)-height*(1/8) && this.x <= 10+15 && this.y <= (height/2)-height*(1/8)+height*(1/4)) {
                ki.addpoint();
                this.x = width/2;
                this.y = height/2;
                this.richtungx = 0;
                this.richtungy = 0;
            }
        } else {
            if(this.y >= 185 && this.x >= width-10-15 && this.y <= 185+height*(1/4)) {
                player.addpoint();
                this.x = width/2;
                this.y = height/2;
                this.richtungx = 0;
                this.richtungy = 0;
            }
        }
    };

    Puck.prototype.render = function () {
        context.beginPath();
        context.fillStyle = color1;
        context.shadowColor = color1;
        context.shadowBlur = shadowsize;
        context.arc(this.x, this.y, 15, 0, 2 * Math.PI, true);
        context.fill();
        context.closePath();
    };
}