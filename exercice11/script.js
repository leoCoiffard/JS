document.addEventListener("DOMContentLoaded",function() {
   function clique() {
      var nombre = parseInt(document.getElementById("nombre").value);
      if (isNaN(nombre)) {
         alert("veuillez entrer un nombre");
      } else {
         alert("la valeur saisie est "+ nombre);
      }
  }
  document.getElementById("bouton").addEventListener("click",clique);
});