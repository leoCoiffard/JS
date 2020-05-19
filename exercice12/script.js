window.addEventListener("load",function(){

    document.getElementById("monImage").addEventListener("mouseover", function(){
        document.getElementById("monImage").setAttribute("src","img/neige.jpg");
    });

    document.getElementById("monImage").addEventListener("mouseout", function(){
        document.getElementById("monImage").setAttribute("src","img/plage.jpg");
    });

    document.getElementById("monImage").addEventListener("mouseover", function(){
        document.getElementById("para").textContent="Quitter la neige !";
    });

    document.getElementById("monImage").addEventListener("mouseout", function(){
        document.getElementById("para").textContent="Survolez l'image...";
    });
//mouseover
//mouseout

});
