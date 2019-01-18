function liste() {
    var highscore = [];
    for (let i=0, iC=localStorage.length; i<iC; ++i) {
        let storageKey = localStorage.key(i);
        highscore[i] = (storageKey + ' : ' + localStorage.getItem(storageKey));
        console.log(highscore[i]);
    }
    //alert(highscore);
    document.getElementById("highscore1").innerHtml = "test";
}
