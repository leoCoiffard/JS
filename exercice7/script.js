var age=prompt("veuillez saisir votre âge ?");
if (age>0 && age<18) {
    alert("Désolé cette page est réservée au hommes majeurs");
}
else if (age<0) {
    alert("arrêtes de cherchez les bugs petit coquin");
}
else if (age>=18) {
   var sexe=confirm("êtes vous un homme ? OK = oui");
   if (sexe == true) {
       alert("Bonjour ! Bienvenue sur notre page");
   }
   else {
       alert("Désolé, cette page est réservée au hommes majeurs c'est la règle");
   }
}
else{
    alert("Vous ne passerez pas !");
}