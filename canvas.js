//erster Versuch ein bild im Canvas anzuszeigen


window.onload = function() {
var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var context = canvas.getContext('2d');
    //checkboard();
    //place();
    var feld1 = new Tabelle(8,8);
    feld1.ausgebenTabelle();



    /*
    canvas.addEventListener('click', function (event) {
        var pos = getMousePos(canvas, event);
        posx = pos.x;
        posy = pos.y;
        alert(posx + " " + posy);
    });

    function getMousePos(c, evt)  {
        var rect = c.getBoundingClientRect();
        return{
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    */

    function startButton() {
        var element = document.getElementById('start');
        element.addEventListener('click', buildfeld);
    }
    document.addEventListener('DOMContentLoaded', startButton);

    function buildfeld() {
        /*
        var data = '<svg xmlns="http://www.w3.org/2000/svg" width="63" height="63">' +
            '<foreignObject width="100%" height="100%">' +
            '<div xmlns="http://www.w3.org/1999/xhtml" id="div" style="background: red; width:63px; height:63px">' +
            '♟</div>' +
            '</foreignObject>' +
            '</svg>';

        var DOMURL = window.URL || window.webkitURL || window;

        var img = new Image();
        var svg = new Blob([data], {type: 'image/svg+xml'});
        var url = (window.URL || window.webkitURL).createObjectURL(svg);

        img.onload = function () {
            context.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
        };

        img.src = url;
        */
        checkboard();
    }

    function checkboard() {
        var height = 80.00;
        var width = 80.00;

        var colums = 8;
        var rows = 8;

        for (var x = 0; x < rows; x++) {
            for (var y = 0; y < colums; y++) {
                /*
                var data = '<svg xmlns="http://www.w3.org/2000/svg" width="63" height="63">' +
                    '<foreignObject width="100%" height="100%">' +
                    '<div xmlns="http://www.w3.org/1999/xhtml" id="div" style="text-align: center; width:63px; height:63px">' +
                    '♟</div>' +
                    '</foreignObject>' +
                    '</svg>';


                //myArray[x][y] = new Element();
                myArray[x][y] = data;
                //myArray[x][y].id = x + " " + y;
                alert(myArray[x][y]);
                var DOMURL = window.URL || window.webkitURL || window;

                var img = new Image();
                var svg = new Blob([data], {type: 'image/svg+xml'});
                var url = DOMURL.createObjectURL(svg);

                img.onload = function () {
                    context.drawImage(img, 0, 0);
                    DOMURL.revokeObjectURL(url);
                };
                img.src = url;
                */

                if(x%2 === y%2) {
                    context.fillStyle = "white";
                    context.fillRect(height*y,width*x,height,width);

                } else {
                    context.fillStyle = "grey";
                    context.fillRect(height*y,width*x,height,width);
                }

            }
        }
        //document.write(table);
    }

    function place(){
        for(var x = 0; x < 8; x++) {
            var img = document.getElementById("BS");


            context.drawImage(img, 80*x, 80*1, 80, 80);
        }
    }
}
};


/*
    function setzen() {
        var A1 = document.getElementById('A1');
        context.target.appendChild(document.getElementById('A1'));
        context.fill();

    }
    setzen();
}
*/


/*
function figur(name, farbe) {
    this.name = name;
    this.farbe = farbe;
}

function spielfeld() {
    var spielfeld = new Array(8);

    for (var i = 0; i < spielfeld.length; i++) {
        spielfeld[i] = new Array(8);
    }


    for (var x = 0; x < spielfeld.length; x++) {
        for (var y = 0; y < spielfeld[x].length; y++) {
            spielfeld[x][y] = new figur('B', 'W');
        }
    }


    context.write(" A   B   C   D   E   F   G   H<br>");
    for (var x = 0; x < spielfeld.length; x++) {
        context.write(x);
        for (var y = 0; y < spielfeld[x].length; y++) {
            context.write("    " + spielfeld[x][y].name + spielfeld[x][x].farbe);
        }
        context.write("<br>");
    }
}
*/
/*
var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = "dark-red-wood-texture-background.jpg";
    img.onload = function () {
        //               (Bild, x, y, breite, höhe)
        context.drawImage(img, 20, 50,300,300);
    }
}
*/
