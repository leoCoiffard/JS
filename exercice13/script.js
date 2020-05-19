document.addEventListener("DOMContentLoaded",function() {

    document.getElementById("cliquer").addEventListener("focus",function() {
    document.getElementById("selection").select();
    });
    document.getElementById("cliquer").addEventListener("click",function() {
    document.getElementById("effacer").value= "";
    });




});