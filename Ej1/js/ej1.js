$(document).ready(function(){
    $("p").hide();
    $("li").hover(function(){
        $("p", this).css("margin-left","50px")
        $("p", this).fadeIn("300");
    });
    $("li").mouseleave(function(){
        $("p", this).fadeOut("300");
      });   
  });