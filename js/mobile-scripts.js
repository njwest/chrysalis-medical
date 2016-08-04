/* Scripts for mobile view */

$(function() {

  // Allow gif to animate on page reload
  $("#transformative-thinking-gif").attr("src", "img/transformative-thinking.gif?" + Math.random());
  $("#chrysalis-logo-gif").attr("src", "img/chrysalis-logo.gif?" + Math.random());

  // Auto-close mobile nav on user click
  $('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display') !='none'){
      $(".navbar-toggle").trigger( "click" );
    }
  });

  // Chevron Mobile Nav Arrow Direction
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
  // $('button.navbar-toggle, #home, .aboutus-fixed').click(function() {
  //   if ($('body, #home, .aboutus-fixed').css('padding-top') === '80px') {
  //       $('body, #home, .aboutus-fixed').css('padding-top', '+=200');
  //   } else {
  //       $('body, #home, .aboutus-fixed').css('padding-top', '80px');
  //   }
  // });

}); // end document ready function
