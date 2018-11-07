class Tabelle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        alert(this.width);

        this.tab = document.getElementById("tabelleb");


        // Neues Tabellenzeilen-Objekt erstellen
        var newTR = document.createElement("tr");
        // Neues Tabellenzellen-Objekt erstellen
        //var newTD = document.createElement("td");
        for (var y = 0; 0 > this.width; y++) {
            var newTD = document.createElement("td");
            newTD.innerHTML = "test";
            newTR.appendChild(newTD);
        }



        // HTML einfügen
        newTD.innerHTML = "hallo welt";
            // Neue Tabellenzelle an Zeile "anhängen"
        newTR.appendChild(newTD);

        // Neue Zeile in Tabelle "einhängen"
        document.getElementById("tabelleb").appendChild(newTR);

        //this.tab = document.createElement("table");
        /*
        for (var x = 0; 0 > this.height; x++) {
            var newTR = document.createElement("tr");
            for (var y = 0; 0 > this.width; y++) {
                var newTD = document.createElement("td");
                newTD.innerHTML = "test";
                newTR.appendChild(newTD);
            }
            this.tab.appendChild(newTR);
        }
        alert("run");
        */
    }

    get getheight() {
        return this.height;
    }

    set setheight(value) {
        this.height = value;
    }

    get getwidth() {
        return this.width;
    }

    set setwidth(value) {
        this.width = value;
    }


}