document.addEventListener("DOMContentLoaded", function () {
    // function convert() {
    //     var eu = parseFloat(document.getElementById("euros").value);
    //     var fr = parseFloat(document.getElementById("francs").value);
    //     var eutofr = (eu * 6.55957);
    //     eutofr = eutofr.toFixed(2);

    //     if (isNaN(eu) && isNaN(fr)) {
    //         document.getElementById("euros").value = "entrer un chiffre";
    //     } else {
    //         if (fr != " ") {
    //             fr = document.getElementById("francs").value = eutofr;
    //         } else {
    //             document.getElementById("francs").value = "désolé il y a un bug";
    //         }
    //     }
    // }
    // function convert2() {
    //     var eu = parseFloat(document.getElementById("euros").value);
    //     var fr = parseFloat(document.getElementById("francs").value);
    //     var frtoeu = (fr / 6.55957);
    //     frtoeu = frtoeu.toFixed(2);
    //     if (isNaN(eu) && isNaN(fr)) {
    //         document.getElementById("francs").value = "entrer un chiffre";
    //     } else {
    //         if (fr != " ") {
    //             fr = document.getElementById("euros").value = frtoeu;
    //         } else {
    //             document.getElementById("euros").value = "désolé il y a un bug";
    //         }
    //     }
    // }
    // document.addEventListener("input", convert);
    // document.addEventListener("input", convert2);


    var eu = document.getElementById("euros");
    var fr = document.getElementById("francs");
    eu.addEventListener("input", function () {
        convmonnaie(this.id, this.value);
    });
    fr.addEventListener("input", function () {
        convmonnaie(this.id, this.value);
    });
    function convmonnaie(id, valeur) {
        if (id == "euros") {
            fr.value = valeur * 6.55957;
        } else {
            eu.value = valeur / 6.55957;
        }
    }
});