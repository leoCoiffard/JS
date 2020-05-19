document.addEventListener("DOMContentLoaded", function () {
    function envoyer() {

        var poid = parseFloat(document.getElementById("poid").value);
        var taille = parseFloat(document.getElementById("taille").value);
        taille = taille * taille;
        var IMC = poid / taille;
        IMC = IMC.toFixed(1);
        if (isNaN(poid && taille)) {
            alert("il faut le faire en chiffre le calcul n'a pas été fait");
        } else {
            alert("votre IMC est de " +IMC);
        }
    }
    document.getElementById("bouton").addEventListener("click", envoyer);
});