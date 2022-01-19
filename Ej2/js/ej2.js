$(document).ready(function(){
    let contador=0;
    $("#insert").click(function(event){
        let marcadeTiempo = event.timeStamp;//timestamp para que cambie la imagen

        let td = $("<td id="+contador+"><img src='https://loremflickr.com/200/200?random+"+marcadeTiempo+"'></td>");
        td.css("display","none");
        let numfilas = $("table tr").length;
        
        if (numfilas==0||contador%7==0){   
            $("table").append("<tr></tr>");
        }
        contador++;
        $("table tr").last().append(td);
        $(td).fadeIn(2000);
    });
    $("#remove").click(function(event){
        $("table tr td").last().fadeOut(2000,function(){
            $("table tr td").last().remove();
            if ($("table tr").last().children() == 0){
                $("table tr").last().remove();
            }
        }); 
        
        
        contador--;
    });
});
