function control() {
    var texte = this.value;
    var longueur = texte.length;
    var caract = 15 - longueur;
    var message = "Il ne vous reste plus que " + caract + " caractère(s) disponible(s).";
    document.getElementById("alerte").innerHTML = message;

    if (caract <= 15 && caract >= 8) {
        this.className = "normal";
    } else if (caract < 8 && caract >= 4) {
        this.className = "attention";
    } else if (caract < 4) {
        this.className = "fin";
    }
}

window.addEventListener("load", function () {
    document.getElementById("saisie").addEventListener("keyup", control);
});
