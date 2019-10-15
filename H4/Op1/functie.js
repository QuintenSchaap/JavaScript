var auto = {
    kleur: "Blauw",
    merk: "Ford",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid);
    },
    
    toeteren: function () {
        console.log("TOET!");
    }
}
console.log(auto.kleur);
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.toeteren();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.toeteren();
