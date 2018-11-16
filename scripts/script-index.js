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

  $("#close").click(function(){
    $("#popup_shadow").fadeOut(500);    
    $('#popup').fadeOut(500);
  }); 

});


