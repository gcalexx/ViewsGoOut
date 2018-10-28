$(document).ready(function(){
  $(".text, .text-user").hide();
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
  
  $("#menu-events").click(function(){
      $("#esidenav").removeClass("hidden-xs");
      $("#esidenav").css("width", "230px");
    setTimeout( function(){
      $(".text, .text-user").show();
    }, 185);
  });

});


