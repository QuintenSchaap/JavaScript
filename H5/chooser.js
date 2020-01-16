fotos = document.getElementById("fotos");
createHolders();
ColorImages();

function createHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "colorpicture";
        pictureHolder.id = "picture-holder-" + i;
            fotos.appendChild(pictureHolder);
    }
}

function ColorImages() {
    pictureHolders = document.getElementsByClassName("colorpicture");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i + 1);
        kleurAfbeelding = document.createElement("H6.img");
        kleurAfbeelding.src = "H6.img/afbeelding" + (i + 1) + ".png";
        kleurAfbeelding.id = (i + 1);
        kleurAfbeelding.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(kleurAfbeelding);
    }
}

function maakFavoriet(id) {
    console.log("Maak mij Favoriet!" + id );
    nietFavoriet = document.getElementsByClassName("favoriet");

    for(var i = 0; i < nietFavoriet.length; i++) {
        nietFavoriet[i].style.backgroundImage = "none";
    }
    favoriet= document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('H6.img/heart.png')";
}

