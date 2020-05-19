document.addEventListener("DOMContentLoaded", function () {
    function verification(e) {
        var nom = document.getElementById("nom").value;
        var email = document.getElementById("email").value;
        var condition = document.getElementById("conditions").checked;
        var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (nom == "") {
            document.getElementById("nom").className = "nom";
            e.preventDefault();
            alert("Tu dois saisir dans le champs Nom");
        }
        else{
           var nomMaj=nom.toUpperCase();
           document.getElementById("nom").value=nomMaj;
            e.preventDefault();
        }
        if (email == "") {
            document.getElementById("email").className = "email";
            e.preventDefault();
            alert("Tu dois saisir dans le champs Email");
        }
        else{
            if (!regExp.test(email)) {
                e.preventDefault();
                alert("votre email n'est pas valide");
            }
        }
        if (condition == false) {
            e.preventDefault();
            document.getElementById("conditionLabel").className = "conditions";
            alert("Tu dois cocher et accepter les conditions générales");
        }
    }
    document.getElementById("vérif").addEventListener("click", verification);

    function htTotal1(e) {
        var choix = document.getElementById("choix1").selectedIndex;
        var qt = document.getElementById("QT1").value;
        switch (choix) {
            case 0:
                var HT1 = qt * 8;
                document.getElementById("HT1").value = HT1;
                e.preventDefault();
                break;
            case 1:
                var HT2 = qt * 15;
                document.getElementById("HT1").value = HT2;
                e.preventDefault();
                break;
            case 2:
                var HT3 = qt * 7;
                document.getElementById("HT1").value = HT3;
                e.preventDefault();
                break;
        }
    }
    document.body.addEventListener("input",htTotal1);
    function htTotal2() {
        var choix = document.getElementById("choix2").selectedIndex;
        var qt = document.getElementById("QT2").value
        switch (choix) {
            case 0:
                var HT1 = qt * 15;
                document.getElementById("HT2").value = HT1;
                e.preventDefault();
                break;
            case 1:
                var HT2 = qt * 8;
                document.getElementById("HT2").value = HT2;
                e.preventDefault();
                break;
            case 2:
                var HT3 = qt * 7;
                document.getElementById("HT2").value = HT3;
                e.preventDefault();
                break;
        }
    }
    document.body.addEventListener("input",htTotal2);
    function htTotal3() {
        var choix = document.getElementById("choix3").selectedIndex;
        var qt = document.getElementById("QT3").value
        switch (choix) {
            case 0:
                var HT1 = qt * 7;
                document.getElementById("HT3").value = HT1;
                e.preventDefault();
                break;
            case 1:
                var HT2 = qt * 8;
                document.getElementById("HT3").value = HT2;
                e.preventDefault();
                break;
            case 2:
                var HT3 = qt * 15;
                document.getElementById("HT3").value = HT3;
                e.preventDefault();
                break;
        }
    }
    document.body.addEventListener("input",htTotal3);
    function htmain() {
        var HT1=parseInt(document.getElementById("HT1").value);
        var HT2=parseInt(document.getElementById("HT2").value);
        var HT3=parseInt(document.getElementById("HT3").value);
        var HTmain=HT1+HT2+HT3;
        document.getElementById("HTmain").value=HTmain;
        e.preventDefault();
    }
    document.body.addEventListener("input",htmain);

    function TTC() {
        var HT=parseInt(document.getElementById("HTmain").value);
        var TTC=HT*(1 + (20/ 100));
        TTC=TTC.toFixed(2);
        document.getElementById("TTC").value=TTC;
        e.preventDefault();
    }
    document.body.addEventListener("input",TTC);
    
    function impression() {
        window.print();
    }
    document.getElementById("imprimer").addEventListener("click",impression);
    
});