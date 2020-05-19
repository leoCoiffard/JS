document.addEventListener("DOMContentLoaded", function () {
    var monPara = document.createElement('h1');
    monPara.setAttribute("id", "monNouveauPara");
    var monTexte = document.createTextNode("Nique Ivar ! Vive Floki.");
    monPara.appendChild(monTexte);
    document.body.appendChild(monPara);
});