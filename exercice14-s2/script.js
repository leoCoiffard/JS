document.addEventListener("DOMContentLoaded", function () {
    var imageTableau=["Harry-potter-4-maisons.png","Hunger-games-logo.jpg","retour-vers-le-futur.jpg"];
    var compteur=0;
    function defile() {
        compteur++;
        if (compteur == imageTableau.length) {
            compteur = 0;
        }
        document.getElementById("image").src = "img/" + imageTableau[compteur];
    }
setInterval(defile, 1000);
});