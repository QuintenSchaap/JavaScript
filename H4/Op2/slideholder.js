var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('H6.img/afbeelding1.png')";
var tellerkin = 1;


slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('H6.img/afbeelding" + volgendeAfbeelding() + ".png')";
});

function volgendeAfbeelding() {
    tellerkin++
    if(tellerkin >= 10) {
        tellerkin= 1;
    }
    console.log(tellerkin);
    return tellerkin;
}