var ton = 1;
function mute(){
    if(ton === 1){
        document.getElementById('audiofile').pause();
        ton = 0;
    } else {
        document.getElementById('audiofile').play();
        ton = 1;
    }

}



