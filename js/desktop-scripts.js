// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(function() {

  var browserHeight = $( window ).height();
  var breakpoint1 = browserHeight / 2;
  var breakpoint2 = breakpoint1 + breakpoint1;
  var breakpoint3 = breakpoint2 + breakpoint1;
  var breakpoint4 = breakpoint3 + breakpoint1;
  var breakpoint5 = breakpoint4 + breakpoint1;
  var breakpoint6 = breakpoint5 + breakpoint1;
  var breakpoint7 = breakpoint6 + breakpoint1;
  var breakpoint8 = breakpoint7 + breakpoint1;
  var breakpoint9 = breakpoint8 + breakpoint1;
  var breakpoint10 = breakpoint9 + breakpoint1;
  var breakpoint11 = breakpoint10 + breakpoint1;
  var breakpoint12 = breakpoint11 + breakpoint1;
  var breakpoint13 = breakpoint12 + breakpoint1;
  var previousScroll = 0;
  var scroll;
  var scrollingDown;
  var scrollingUp;
  var directionCheck = function() {
    if (previousScroll < scroll) {
      scrollingDown = true;
      scrollingUp = false;
      previousScroll = scroll;
    }
    else if (scroll < previousScroll) {
      scrollingDown = false;
      scrollingUp = true;
      previousScroll = scroll;
    }
  };

  // Animations during user scrolls
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    directionCheck();
    if (scrollingDown) {

      // desktop navbar img appears when user begins to scroll down
      $('#desktop-navbar-img')
        .attr('data-wow-delay', '1.5s')
        .attr('data-user-scroll', 'true')
        .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');

      if ((scroll >= breakpoint1) && (scroll < breakpoint2)) {
        $('#aboutus1-fixed').removeClass('hide fadeOut').addClass('fadeIn');
        // console.log('aboutus1 fadeIn fired');
      }
      else if ((scroll >= breakpoint3) && (scroll < breakpoint4)) {

        // console.log('aboutus1 fadeOut fired');
      }
      else if ((scroll >= breakpoint5) && (scroll < breakpoint6)) {
        $('#aboutus1-fixed').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus2-fixed').removeClass('hide fadeOut').addClass('fadeIn');
        // console.log('aboutus2 fadeIn fired');
      }
      else if ((scroll >= breakpoint7) && (scroll < breakpoint8)) {

        // console.log('aboutus2 fadeOut fired');
      }
      else if ((scroll >= breakpoint9) && (scroll < breakpoint10)) {
        $('#aboutus2-fixed').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus3-fixed').removeClass('hide fadeOut').addClass('fadeIn');
        // console.log('aboutus3 fadeIn fired');
      }
      else if (scroll >= breakpoint12) {
        $('#aboutus3-fixed').removeClass('fadeIn').addClass('fadeOut');
        // console.log('aboutus3 fadeOut fired');
      }

    } // end scrolling down

    if (scrollingUp) {
      if ((scroll < breakpoint12) && (scroll >= breakpoint11)) {
        $('#aboutus3-fixed').removeClass('fadeOut').addClass('fadeIn');
        // console.log('aboutus3 fadeIn fired');
      }
      else if ((scroll < breakpoint10) && (scroll >= breakpoint9)) {

        // console.log('aboutus3 fadeOut fired');
      }
      else if ((scroll < breakpoint8) && (scroll >= breakpoint7)) {
        $('#aboutus3-fixed').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus2-fixed').removeClass('fadeOut').addClass('fadeIn');
        // console.log('aboutus2 fadeIn fired');
      }
      else if ((scroll < breakpoint6) && (scroll >= breakpoint5)) {

        // console.log('aboutus2 fadeOut fired');
      }
      else if ((scroll < breakpoint4) && (scroll >= breakpoint3)) {
        $('#aboutus2-fixed').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus1-fixed').removeClass('fadeOut').addClass('fadeIn');
        // console.log('data-status-click fired;');
      }
      else if ((scroll < breakpoint2) && (scroll >= breakpoint1)) {
        if ($('#aboutus-desktop-nav').data('status-click') !== true) { // Prevent fadeOut when user clicks 'About Us' on navbar
          $('#aboutus1-fixed').removeClass('fadeIn').addClass('fadeOut');
          // console.log('aboutus1 fadeOut fired');
        }
      }
    } // end scrolling up
    console.log($('#aboutus-desktop-nav').data('status-click'));
  }); // end window scroll

  // Prevent fadeOut when user clicks 'About Us' on navbar
  $('#aboutus-desktop-nav').on('click', function() {
    $('#aboutus-desktop-nav').data('status-click', true);
    var resetDataStatusClick = function() {
      $('#aboutus-desktop-nav').data('status-click', false);
    }
    setTimeout(resetDataStatusClick, 2000);
  });

}); // end document ready
