document.addEventListener("DOMContentLoaded", function () {
    function controle() {
        var compteur = 0;
        var passion;
        var cases = document.getElementsByClassName("case");
        for (var i = 0; i < cases.length; i++) {
            if (cases[i].checked) {
                passion = cases[i].value;
                compteur++;
                console.log(compteur);

            }
        }
        switch (compteur) {
            case 0:
                alert("tu dois faire un choix");
                break;
            case 1:
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
                break;
            case 2:
                alert("bravo tu as deux passion différente");
                break;
            case 3:
                alert("trois passion c'est beaucoup");
                break;
            case 4:
                alert("Ca fait beaucoup là non ?");
                break;
        }
    }
    document.getElementById("bouton").addEventListener("click", controle);
});