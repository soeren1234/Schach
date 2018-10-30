//erster Versuch ein bild im Canvas anzuszeigen



var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var context = canvas.getContext('2d');

    function startButton() {
        var element = document.getElementById('start');
        element.addEventListener('click', buildfeld);
    }
    document.addEventListener('DOMContentLoaded', startButton);

    function buildfeld() {
        checkboard();
        place();
    }

    function checkboard() {

        var height = 63.00;
        var width = 63.00;

        var colums = 8;
        var rows = 8;



        for (var i = 0; i < rows; i++) {
            for (var j = 0, hcolums = colums / 2; j < hcolums; j++) {
                context.rect(2 * j * width + (i % 2 ? 0 : width), i * height, width, height);
            }
        }
        context.fill();
    }

    function place(){
        var bauer = '♟';

        context.font = '30px Arial'
        context.fillText(bauer,30,30);

    }



}
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
