/* Scripts for mobile view */

var breakpointHalf = breakpoint1 / 2;
var breakpointThird = breakpoint1 / 3;
var breakpointFourth = breakpoint1 / 4;
var breakpointFifth = breakpoint1 / 5;


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
  $('button.navbar-toggle, #home, .aboutus-fixed').click(function() {
    if ($('body, #home, .aboutus-fixed').css('padding-top') === '80px') {
        $('body, #home, .aboutus-fixed').css('padding-top', '+=350');
    } else {
        $('body, #home, .aboutus-fixed').css('padding-top', '80px');
    }
  });

  // Mobile Nav (smoothScroll doesn't work properly on mobile)
  $('#aboutus-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#howwework').offset().top -breakpoint13 }, "slow");
  });
  $('#howwework-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#howwework').offset().top -breakpointFourth }, "slow");
  });
  $('#expertise-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#expertise').offset().top -breakpointFourth }, "slow");
  });
  $('#contactus-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#contactus').offset().top -breakpointFourth }, "slow");
  });

  // console.log('mobile-scripts.js breakpointFifth = ', breakpointFifth);
  // console.log('mobile-scripts.js breakpointFourth = ', breakpointFourth);
  // console.log('mobile-scripts.js breakpointThird = ', breakpointThird);
  // console.log('mobile-scripts.js breakpointHalf = ', breakpointHalf);
  // console.log('mobile-scripts.js breakpoint1 = ', breakpoint1);
  // console.log('mobile-scripts.js breakpoint2 = ', breakpoint2);
  // console.log('mobile-scripts.js breakpoint3 = ', breakpoint3);
  // console.log('mobile-scripts.js breakpoint4 = ', breakpoint4);
  // console.log('mobile-scripts.js breakpoint5 = ', breakpoint5);
  // console.log('mobile-scripts.js breakpoint6 = ', breakpoint6);
  // console.log('mobile-scripts.js breakpoint7 = ', breakpoint7);
  // console.log('mobile-scripts.js breakpoint8 = ', breakpoint8);
  // console.log('mobile-scripts.js breakpoint9 = ', breakpoint9);
  // console.log('mobile-scripts.js breakpoint10 = ', breakpoint10);
  // console.log('mobile-scripts.js breakpoint11 = ', breakpoint11);
  // console.log('mobile-scripts.js breakpoint12 = ', breakpoint12);
  // console.log('mobile-scripts.js breakpoint13 = ', breakpoint13);
  // console.log('mobile-scripts.js breakpoint14 = ', breakpoint14);
  // console.log('mobile-scripts.js breakpoint15 = ', breakpoint15);
  // console.log('mobile-scripts.js breakpoint16 = ', breakpoint16);
  // console.log('mobile-scripts.js breakpoint17 = ', breakpoint17);
  // console.log('mobile-scripts.js breakpoint18 = ', breakpoint18);
  // console.log('mobile-scripts.js breakpoint19 = ', breakpoint19);
  // console.log('mobile-scripts.js breakpoint20 = ', breakpoint20);
  // console.log('mobile-scripts.js breakpoint21 = ', breakpoint21);
  // console.log('mobile-scripts.js breakpoint22 = ', breakpoint22);
  // console.log('mobile-scripts.js breakpoint23 = ', breakpoint23);

}); // end document ready function
