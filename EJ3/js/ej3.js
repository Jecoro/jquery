$(document).ready(function(){
    let contador = 0;
    $("#homer").click(function(event){
        contador++;
        if(contador%2!=0){
            $("#homerText").fadeIn(2000);
        }else{
            $("#homerText").slideUp(2000);
        }
        
    });
   
    $("#marge").click(function(event){
        contador++;
        if(contador%2!=0){
            $("#margeText").slideDown(2000);
        }else{
            $("#margeText").fadeOut(2000);
        }
    });
    $("#bart").click(function(event){
        contador++;
        if(contador%2!=0){
            $("#bartText").show(1000);
        }else{
            $("#bartText").hide(2000);
        }
    });
    $("#lisa").click(function(event){
        contador++;
        if(contador%2!=0){
            $("#lisaText").slideDown(2000).css("color", "red");
        }else{
            $("#lisaText").slideUp(2000).css("color", "blue");
        }
    });
    $("#maggie").click(function(event){
        contador++;
        if(contador%2!=0){
            $("#maggieText").show(3000);
        }else{
            $("#maggieText").hide(2000);
        }
    });
});