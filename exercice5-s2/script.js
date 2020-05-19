document.addEventListener("DOMContentLoaded", function () {
    function controle() {
        var compteur = 0;
        var passion;
        var cases = document.getElementsByClassName("case");
        for (var i = 0; i < cases.length; i++) {
            if (cases[i].checked) {
                passion = cases[i].value;
                compteur++;
            }
        }
        if (compteur == 0) {
            texte = "tu dois faire un choix";
        } else if (compteur > 1) {
            texte = "tu ne dois jamais t'ennuyé";
        } else {
            switch (passion) {
                case "sport":
                    alert("C'est bien pour la santé !");
                    break;
                case "musique":
                    alert("C'est bon pour le morale");
                    break;
                case "lecture":
                    alert("Ah ! tu lis c'est rare aujourd'hui");
                    break;
                case "internet":
                    alert("Sors ! Prend l'air frais");
                    break;
            }
        }
    }
    document.getElementById("bouton").addEventListener("click", controle);
});