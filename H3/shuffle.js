var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];

// RandomNumbers niet langer is dan 9
while(randomNumbers.length < 9) {

    // Random getal pakken
    random = Math.floor(Math.random() * 9) + 1;

    // Kijken of de getal er in zit, zo niet
    if(randomNumbers.lastIndexOf(random) == -1) {

        // Dan pusht die hem hier
        randomNumbers.push(random);
    }
}

random = 0;
for(var i = 0; i <plaatjes.length; i++) {
    plaatjes[i].src = "img/afbeelding" + randomNumbers[random] + ".png";
    random++;
}