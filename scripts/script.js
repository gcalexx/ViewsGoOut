$(document).ready(function(){
  $(".nav").hide();
  $("#menu, #menub").click(function(){
      $("#mySidenav").css("width", "305px");
      setTimeout(
        function() 
        {
          $(".nav").show();
        }, 300);
      $("#menu, #menub").fadeOut(400);    
  });
  $("#cerrar").click(function(){
      $("#mySidenav").css("width", "0px");
      $(".nav").hide();
      $("#menu, #menub").fadeIn(400);
  });
  
  $("#esidenav").mouseenter(function(){
    $("#esidenav").css("width", "230px");
  });
  $("#esidenav").mouseleave(function(){
    $("#esidenav").css("width", "80px");
  });
});


