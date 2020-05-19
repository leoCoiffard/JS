document.addEventListener("DOMContentLoaded",function() {
    function clique() {
        var HT = parseFloat(document.getElementById("HT").value);
        var TVA = (document.getElementById("TVA").value);
        var TTC =(HT*(1+TVA/100));
        TTC=TTC.toFixed(2);
       if (isNaN(HT)) {
          alert("Entrer un montant on t'as dit");
       } else {
          alert("le prix TTC est de "+ TTC);
       }
   }
   document.getElementById("TTC").addEventListener("click",clique);
 });