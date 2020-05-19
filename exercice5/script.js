var age = prompt("veuillez saisir votre âge");

if (age>0  && age < 12) {
    alert("vous êtes un enfant");
}
else if (age<0) {
    alert("arrête de chercher les bugs");
}
else if (age >= 12 && age < 18) {
    alert("vous êtes un ado");
}
else if (age>130) {
    alert("soit t'es un mytho soit t'es immortel dans les deux cas je te plains");
}
else if (age >= 18) {
    alert("vous êtes majeur");
}
else{
    alert("veuillez saisir votre âge chasseur de bug");
}