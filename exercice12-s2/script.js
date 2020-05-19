document.addEventListener("DOMContentLoaded", function () {
    var compteur;
            var i=0;
        function décompte() {
            i++;
        var secondes=document.getElementById("compteur").value= 11-i;
        console.log(secondes);
        if (i ==11) {
            window.location="https://cefii.fr/";
    }
        document.getElementById("compteur").value = secondes;
        compteur = setTimeout(décompte, 1000);
    }
    function stop() {
        clearTimeout(compteur);
    }
    décompte();
    document.getElementById("it's_time_to_stop").addEventListener("click", stop);


});