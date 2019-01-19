var soundvolume = 1;
var up = 0.2;
var down = -0.2;
document.getElementById("sound").volume = soundvolume;
var ton = 1;
var gamevolume = 1;
var gamesound = 1;
document.getElementById('audiofile').play();
function mute(){
    if(ton === 1){
        document.getElementById('audiofile').pause();
        ton = 0;
        document.getElementById("sound").style.textDecoration = 'line-through';
    } else {
        document.getElementById('audiofile').play();
        ton = 1;
        document.getElementById("sound").style.textDecoration = 'none';
    }
}

function sounddown(){
    soundvolume = (soundvolume + down>0.2)?soundvolume + down : soundvolume;
    document.getElementById("audiofile").volume = soundvolume;

}

function soundup() {
    soundvolume = (soundvolume + up<=1)?soundvolume + up : soundvolume;
    document.getElementById("audiofile").volume = soundvolume;
}
document.getElementById("gamesoundoff").style.display= 'none';
document.getElementById("gamesoundon").style.display= 'block';
function mutegame() {
    if(gamesound===1){
        //document.getElementById("gamesound").style.textDecoration = 'none';
        //document.getElementById("gamesound").innerHtml = "test";
        document.getElementById("gamesoundoff").style.display= 'block';
        document.getElementById("gamesoundon").style.display= 'none';

        gamesound=0;
    } else {
        //document.getElementById("gamesound").style.textDecoration = 'line-through';

        document.getElementById("gamesoundoff").style.display= 'none';
        document.getElementById("gamesoundon").style.display= 'block';
        gamesound=1;
    }
}

function gamesounddown() {
    gamevolume = (gamevolume + down>0.2)?gamevolume + down : gamevolume;
}

function gamesoundup() {
    gamevolume = (gamevolume + up<=1)?gamevolume + up : gamevolume;
}

