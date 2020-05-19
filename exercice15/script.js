document.addEventListener("DOMContentLoaded",function() {
  
     
     function envoyer() {
        var nom = document.getElementById("nom").value;
        console.log(nom);
        var prenom =document.getElementById("prenom").value;
        console.log(prenom);
            var monPara = document.createElement('h1');
            monPara.setAttribute("id","monNouveauPara");
            var monTexte = document.createTextNode("Bonjour "+prenom +" " +nom);
            monPara.appendChild(monTexte);
            document.body.appendChild(monPara);
     }
  document.getElementById("bouton").addEventListener("click",envoyer);


});