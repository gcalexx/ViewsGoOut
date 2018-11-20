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

  $(".ok").click(function(){
    $("#popup_shadow").fadeOut(500);    
    $('#popup-registered').fadeOut(500);
    $('#popup-error-bol').fadeOut(500);
    $('#popup-error-login').fadeOut(500);
  }); 

  $("#Registrado").click(function(){
    $("#popup_shadow").fadeIn(500);    
    $('#popup-registered').fadeIn(500);
  }); 

  $("#Boleta-existe").click(function(){
    $("#popup_shadow").fadeIn(500);    
    $('#popup-error-bol').fadeIn(500);
  }); 

  $("#Error-login").click(function(){
    $("#popup_shadow").fadeIn(500);    
    $('#popup-error-login').fadeIn(500);
  }); 

});


