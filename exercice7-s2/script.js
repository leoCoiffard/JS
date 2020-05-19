document.addEventListener("DOMContentLoaded", function () {

    function question() {
    var réponse= document.getElementById("année").selectedIndex;
    switch (réponse) {
        case 0:
            alert("Plus tard !")
            break;
            case 1:
                alert("Presque!")
                break;
                case 2:
                alert("Bonne réponse! Le W3C fut créé en octobre 1994 par Tim Berners Lee.")
                break;
                case 3:
                alert("Non. 1996 correspond à la première recommandation du CSS.")
                break;
                case 4:
                alert("Belle année pour le football français mais rien à voir avec le W3C !")
                break;
                case 5:
                alert("Vous avez dormi avant ?!")
                break;
    }
}
document.getElementById("bouton").addEventListener("click",question);
});