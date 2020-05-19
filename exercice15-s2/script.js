document.addEventListener("DOMContentLoaded", function () {
    function limite() {
        var texte = document.getElementById("champs").value;
        var longueur = texte.length;
        var nbcara = 15 - longueur;
        var msg = "Il ne vous reste plus que " + nbcara + " caractère(s) disponible(s).";
        document.getElementById("alerte").innerHTML = msg;
    
        if (nbcara <= 15 && nbcara >= 8) {
            document.getElementById("champs").className = "normal";
        } else if (nbcara < 8 && nbcara >= 4) {
            document.getElementById("champs").className = "orange";
        } else if (nbcara < 4) {
            document.getElementById("champs").className = "rouge";
        }
    }
    document.getElementById("champs").addEventListener("input", limite);
});