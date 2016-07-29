/* Scripts for mobile view */

$(function() {

  // Allow gif to animate on page reload
  $("#transformative-thinking-gif").attr("src", "img/transformative-thinking.gif?" + Math.random());
  $("#chrysalis-logo-gif").attr("src", "img/chrysalis-logo.gif?" + Math.random());
  var delayTransformativeGif = function() {
    $("#transformative-thinking-gif").removeClass('hide')addClass('show');
  }
  setTimeout(delayTransformativeGif, 2000);

  // Auto-close mobile nav on user click
  $('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display') !='none'){
      $(".navbar-toggle").trigger( "click" );
    }
  });

  // Mobile Nav Arrow Direction
  $('button.navbar-toggle').click(function() {
    if ($(this).attr('data-arrow') === 'down') {
      $(this).attr('data-arrow', 'up');
      $('#mobile-arrow').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
    else if ($(this).attr('data-arrow') === 'up') {
      $(this).attr('data-arrow', 'down');
      $('#mobile-arrow').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
  });

  // Push body down when mobile nav drawer opens
  // Use this only if client wants the body of the page to be pushed down as the mobile nav drawer opens.
  $('button.navbar-toggle').click(function() {
    if ($('body').css('padding-top') === '80px') {
        $('body').css('padding-top', '+=350');
    } else {
        $('body').css('padding-top', '80px');
    }
  });

  // Mobile Nav (smoothScroll doesn't work properly on mobile)
  $('#aboutus-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#howwework').offset().top -4000 }, "slow");
  });
  $('#howwework-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#howwework').offset().top -80 }, "slow");
  });
  $('#expertise-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#expertise').offset().top -80 }, "slow");
  });
  $('#contactus-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#contactus').offset().top -80 }, "slow");
  });

}); // end document ready function
