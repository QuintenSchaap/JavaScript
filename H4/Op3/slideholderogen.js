// Kin SlideHolder

var slideholderkin = document.getElementById("slideholderkin");
slideholderkin.style.backgroundImage = "url('img/kin1.jpg')";
var tellerkin = 1;


slideholderkin.addEventListener("click", function () {
    slideholderkin.style.backgroundImage = "url('img/kin" + volgendeAfbeeldingkin() + ".jpg')";
});

function volgendeAfbeeldingkin() {
    tellerkin++;
    if(tellerkin >= 6) {
        tellerkin= 1;
    }
    console.log(tellerkin);
    return tellerkin;
}

// Neus Slidehoder

var slideholderneus = document.getElementById("slideholderneus");
slideholderneus.style.backgroundImage = "url('img/neus1.jpg')";
var tellerneus = 1;


slideholderneus.addEventListener("click", function () {
    slideholderneus.style.backgroundImage = "url('img/neus" + volgendeAfbeeldingneus() + ".jpg')";
});

function volgendeAfbeeldingneus() {
    tellerneus++;
    if(tellerneus >= 6) {
        tellerneus= 1;
    }
    console.log(tellerneus);
    return tellerneus;
}

// Ogen Slidehoder

var slideholderogen = document.getElementById("slideholderogen");
slideholderogen.style.backgroundImage = "url('img/ogen1.jpg')";
var tellerogen = 1;


slideholderogen.addEventListener("click", function () {
    slideholderogen.style.backgroundImage = "url('img/ogen" + volgendeAfbeeldingogen() + ".jpg')";
});

function volgendeAfbeeldingogen() {
    tellerogen++;
    if(tellerogen >= 6) {
        tellerogen= 1;
    }
    console.log(tellerogen);
    return tellerogen;
}