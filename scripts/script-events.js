$(document).ready(function(){
  $(".text, .text-user").hide();
  $(".nav").hide();
  $("#popup_shadow").hide();
  $('#popup').hide();

  $("#esidenav").mouseenter(function(){
    $("#esidenav").css("width", "230px");
    setTimeout( function(){
      $(".text, .text-user").show();
    }, 185);
    
  });
  $("#esidenav").mouseleave(function(){
    $("#esidenav").css("width", "70px");
    $(".text, .text-user").hide();
  });

  $("#usuario").click(function(){
    $("#esidenav").css("width", "70px");
    $(".text, .text-user").hide();
  });

  $("#explorar").click(function(){
    $("#esidenav").css("width", "70px");
    $(".text, .text-user").hide();
  });

  $("#crear").click(function(){
    $("#esidenav").css("width", "70px");
    $(".text, .text-user").hide();
  });

  $("#buscar").click(function(){
    $("#esidenav").css("width", "70px");
    $(".text, .text-user").hide();
  });

  $("#configuracion").click(function(){
    $("#esidenav").css("width", "70px");
    $(".text, .text-user").hide();
  });

  $("#ver-mas").click(function(){
    $(".a-event").clone().appendTo("#row");
    $("html").animate({ scrollTop: $(document).height() }, 1000);
  });

  $("#menu-events").click(function(){
      $("#esidenav").removeClass("hidden-xs");
      $("#esidenav").css("width", "230px");
    setTimeout( function(){
      $(".text, .text-user").show();
    }, 185);
  });

  $("#close-events").click(function(){
    $("#esidenav").css("width", "0px");
    $(".text, .text-user").hide();
    setTimeout( function(){
      $("#esidenav").addClass("hidden-xs");
    }, 450);
  });

  $("#mas").click(function(){
    $("#popup_shadow").fadeIn(500);
    $('#popup').fadeIn(500);
  }); 

  $("#close").click(function(){
    $("#popup_shadow").fadeOut(500);    
    $('#popup').fadeOut(500);
  }); 
  
  $("#profile-picture").mouseenter(function(){
      $("#picture, #label-picture").fadeIn();
  });

  $("#picture, #label-picture").mouseleave(function(){
    $("#picture, #label-picture").fadeOut();
  });

  $("#eventos, #eventos-xs").click(function(){
    console.log("holaaaa");
    $("#event-request, #my-friends, #friend-request").css("animation-name", "fadeOut");
    $("#event-request, #my-friends, #friend-request").css("animation-duration", ".5s");
    setTimeout(function(){
      $("#event-request, #my-friends, #friend-request").hide();
      $("#event-request, #my-friends, #friend-request").css("animation-name", "");
      $("#event-request, #my-friends, #friend-request").css("animation-duration", "");
    }, 430);
    setTimeout(function(){
      $("#my-events").css("animation-name", "fadeIn");
      $("#my-events").css("animation-duration", "1s");
      $("#my-events").show();
    }, 600);
  });

  $("#invitaciones, #invitaciones-xs").click(function(){
    $("#my-events, #my-friends, #friend-request").css("animation-name", "fadeOut");
    $("#my-events, #my-friends, #friend-request").css("animation-duration", ".5s");
    setTimeout(function(){
      $("#my-events, #my-friends, #friend-request").hide();
      $("#my-events, #my-friends, #friend-request").css("animation-name", "");
      $("#my-events, #my-friends, #friend-request").css("animation-duration", "");
    }, 430);
    setTimeout(function(){
      $("#event-request").css("animation-name", "fadeIn");
      $("#event-request").css("animation-duration", "1s");
      $("#event-request").show();
    }, 600);
  });

  $("#amigos, #amigos-xs").click(function(){
    $("#my-events, #event-request, #friend-request").css("animation-name", "fadeOut");
    $("#my-events, #event-request, #friend-request").css("animation-duration", ".5s");
    setTimeout(function(){
      $("#my-events, #event-request, #friend-request").hide();
      $("#my-events, #event-request, #friend-request").css("animation-name", "");
      $("#my-events, #event-request, #friend-request").css("animation-duration", "");
    }, 430);
    setTimeout(function(){
      $("#my-friends").css("animation-name", "fadeIn");
      $("#my-friends").css("animation-duration", "1s");
      $("#my-friends").show();
    }, 600);
  });

  $("#solicitudes, #solicitudes-xs").click(function(){
    $("#my-events, #event-request, #my-friends").css("animation-name", "fadeOut");
    $("#my-events, #event-request, #my-friends").css("animation-duration", ".5s");
    setTimeout(function(){
      $("#my-events, #event-request, #my-friends").hide();
      $("#my-events, #event-request, #my-friends").css("animation-name", "");
      $("#my-events, #event-request, #my-friends").css("animation-duration", "");
    }, 430);
    setTimeout(function(){
      $("#friend-request").css("animation-name", "fadeIn");
      $("#friend-request").css("animation-duration", "1s");
      $("#friend-request").show();
    }, 600);
  });

});


