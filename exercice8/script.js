var region = prompt("Dans quel département résidez-vous?", "49,37 ou 75");

switch (region) {
    case "49":
        alert("vous habitez en Maine-et-Loire");
        break;
    case "37":
        alert("vous habitez en Indre-et-Loire");
        break;
    case "75":
        alert("vous habitez Paris");
        break;
    default:
        alert("Désolé je ne connais pas ce département");
        break;
}
var regionalt = parseInt(prompt("Dans quel département résidez-vous?", "49,37 ou 75"));

switch (regionalt) {
    case 49:
        alert("vous habitez en Maine-et-Loire");
        break;
    case 37:
        alert("vous habitez en Indre-et-Loire");
        break;
    case 75:
        alert("vous habitez Paris");
        break;
    default:
        alert("Désolé je ne connais pas ce département");
        break;
}