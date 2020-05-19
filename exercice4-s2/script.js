document.addEventListener("DOMContentLoaded", function () {

        function passion() {
        var sprt=document.getElementById("sport").checked;
        var mu=document.getElementById("musique").checked;
        var lu=document.getElementById("lecture").checked;
        var inter=document.getElementById("internet").checked;
        if (sprt == false && mu == false && lu == false && inter == false) {
            alert("fais un choix tu y est obligé ");
        } else {
            if (sprt == true) {
                alert("C'est bien pour la santé");
            } else if (mu == true) {
                alert("C'est bon pour le morale");
            }else if (lu == true) {
                alert("Ah ! tu lis c'est rare aujourd'hui");
            }else{
                alert("Sors ! Prend l'air frais");
            }
        }
    }
    document.getElementById("bouton").addEventListener("click",passion);
});