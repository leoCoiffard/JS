document.addEventListener("DOMContentLoaded", function () {
    function envoyer(e) {

        var poid = parseFloat(document.getElementById("poid").value);
        var taille = parseFloat(document.getElementById("taille").value);
        taille = taille * taille;
        var IMC = poid / taille;
        IMC = IMC.toFixed(1);
        if (isNaN(poid && taille)) {
            e.preventDefault();
            alert("il faut le faire en chiffre le calcul n'a pas été fait");
        } else {
            if (IMC < 16.5) {
                e.preventDefault();
                var monPara = document.createElement('h1');
                monPara.setAttribute("id", "monNouveauPara");
                var monTexte = document.createTextNode("Votre IMC est de " + IMC + " " + "vous êtes en dénutrition (Waluigi)");
                monPara.appendChild(monTexte);
                document.body.appendChild(monPara);
            } else if (IMC >= 16.5 && IMC < 18.5) {
                e.preventDefault();
                var monPara = document.createElement('h1');
                monPara.setAttribute("id", "monNouveauPara");
                var monTexte = document.createTextNode("Votre IMC est de " + IMC + " " + "vous êtes dans dans l'état de maigreur (Peach/Daisy)");
                monPara.appendChild(monTexte);
                document.body.appendChild(monPara);
            } else if (IMC >= 18.5 && IMC <= 25) {
                e.preventDefault();
                var monPara = document.createElement('h1');
                monPara.setAttribute("id", "monNouveauPara");
                var monTexte = document.createTextNode("Votre IMC est de " + IMC + " " + "vous êtes en corpulence normale (Luigi)");
                monPara.appendChild(monTexte);
                document.body.appendChild(monPara);
            } else if (IMC > 25 && IMC <= 30) {
                e.preventDefault();
                var monPara = document.createElement('h1');
                monPara.setAttribute("id", "monNouveauPara");
                var monTexte = document.createTextNode("Votre IMC est de " + IMC + " " + "vous êtes en surpoids (Mario)");
                monPara.appendChild(monTexte);
                document.body.appendChild(monPara);
            } else if (IMC > 30 && IMC <= 35) {
                e.preventDefault();
                var monPara = document.createElement('h1');
                monPara.setAttribute("id", "monNouveauPara");
                var monTexte = document.createTextNode("Votre IMC est de " + IMC + " " + "vous êtes en obésité modérée (Wario)");
                monPara.appendChild(monTexte);
                document.body.appendChild(monPara);
            } else if (IMC > 35 && IMC < 40) {
                e.preventDefault();
                var monPara = document.createElement('h1');
                monPara.setAttribute("id", "monNouveauPara");
                var monTexte = document.createTextNode("Votre IMC est de " + IMC + " " + "vous êtes en obésité sévère (Donkey Kong)");
                monPara.appendChild(monTexte);
                document.body.appendChild(monPara);
            } else {
                e.preventDefault();
                var monPara = document.createElement('h1');
                monPara.setAttribute("id", "monNouveauPara");
                var monTexte = document.createTextNode("Votre IMC est de " + IMC + " " + "Vous êtes en obésité morbide ou massive (Bowser)");
                monPara.appendChild(monTexte);
                document.body.appendChild(monPara);
            }
        }
    }
    document.getElementById("bouton").addEventListener("click", envoyer);
});