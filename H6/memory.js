var fotos = document.getElementById("fotos");
var player1beurt = true;
var player1Score = 0;
var player2Score = 0;
var geselecteerdeKleuren = [];

function createImage (i) {
    var picture = document.createElement("img");
    picture.src = "img/achtergrond.png";
    picture.className = "selection";
    picture.addEventListener("click", function () {
        picture.src = "img/afbeelding" + i + ".png";
        if (geselecteerdeKleuren.length < 2) {
            geselecteerdeKleuren.push(picture);
        }
        if (geselecteerdeKleuren.length == 2) {
            puntenTelling();
            winnendeSpeler();
        }
    });
    fotos.appendChild(picture);
}
function maakColorArray() {
    var afbeeldingNummer = 0;
    var kleuren = [];

    while (kleuren.length <= 17) {
        afbeeldingNummer = Math.floor((Math.random() *9)+1);
        if (occurencesInArray(kleuren, afbeeldingNummer,2)) {
            kleuren.push(afbeeldingNummer);
        }
    }
    return kleuren;
}
function occurencesInArray(arr, str, i) {
    var occ = 0;
    if (arr.length == 0) {
        return true;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == str) {
                occ++;
            }
        }
        if (occ <2) {
            return true;
        } else {
            return false;
        }
    }
}
function puntenTelling() {
    if (geselecteerdeKleuren[0].src == geselecteerdeKleuren[1].src) {
        if (player1beurt) {
            player1Score++;
            document.getElementById("player1").textContent = `Speler 1: ${player1Score}`;
        } else {
            player2Score++;
            document.getElementById("player2").textContent = `Speler 2: ${player2Score}`;
        }
        geselecteerdeKleuren = [];
    } else {
        if (player1beurt) {
            document.getElementById("aandebeurt").textContent = "Aan de beurt: Speler 2";
            player1beurt = false;
        } else {
            document.getElementById("aandebeurt").textContent = "Aan de beurt: Speler 1";
            player1beurt = true;
        }
        setTimeout(clear,600)
    }
}
function winnendeSpeler() {
    if (player1Score + player2Score == 9) {
        if (player1Score > player2Score) {
            document.getElementById("gewonnen").textContent = "Speler 1 heeft het spel gewonnen."
        } else {
            document.getElementById("gewonnen").textContent = "Speler 2 heeft het spel gewonnen."
        }
        document.getElementById("gewonnen").style.visibility = "unset"
    } else return;
}
function clear() {
    for (var i = 0; i < 2; i++) {
        geselecteerdeKleuren[i].src = "img/achtergrond.png";
    }
    geselecteerdeKleuren = [];
}
var randomAfbeeldingen = maakColorArray();

for (var i = 0; i < 18; i++) {
    createImage(randomAfbeeldingen[i]);
}