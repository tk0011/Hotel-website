
        
$(window).on("load", function (e) {

  $('.preloader-background').delay(500).fadeOut('slow');

  $('.preloader-wrapper').delay(500).fadeOut();

  AOS.init();
  
  $('.background').carousel({
    fullWidth: true,
    duration: 150
  });

  setInterval(function() {
    $('.background').carousel('next');
  }, 3000);

})

$(document).ready(function(){

    $('.sidenav').sidenav();

    $('.datepicker').datepicker({
      autoClose: true,
      showClearBtn : true
    });

    $('.timepicker').timepicker({
      autoClose: true,
      showClearBtn : true
    });

    $('select').formSelect();

    $('.modal').modal();
   
    $('.tabs').tabs();

  })

