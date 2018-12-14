//Puck
function Puck (x,y) {
    this.x = x;
    this.y = y;
    this.x_speed = 3;
    this.y_speed = 3;

    Puck.prototype.setx = function (x) {
        this.x = x;
    };

    Puck.prototype.sety = function (y) {
        this.y = y;
    };

    Puck.prototype.update = function() {
        if(this.x > width - feldrand || this.x< feldrand) {
            this.x_speed = -this.x_speed;
        }

        if(this.y > height - feldrand || this.y < feldrand){
            this.y_speed= -this.y_speed;
        }
        this.x += this.x_speed;
        this.y += this.y_speed;

    };

    Puck.prototype.speed = function(x,y) {
        this.x_speed = x;
        this.y_speed = y;
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