/* Scripts for desktop and tablet view */

// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(function() {

  var browserHeight = $( window ).height();
  var breakpoint1 = browserHeight / 3;
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
  var breakpoint14 = breakpoint13 + breakpoint1;
  var breakpoint15 = breakpoint14 + breakpoint1;
  var breakpointHalf = breakpoint1 / 2;
  var breakpointThird = breakpoint1 / 3;
  var breakpointFourth = breakpoint1 / 4;
  var breakpointFifth = breakpoint1 / 5;
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

      // desktop & tablet navbar img appears when user begins to scroll down
      $('#desktop-navbar-img')
        .attr('data-wow-delay', '1.5s')
        .attr('data-user-scroll', 'true')
        .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');

      $('#tablet-navbar-img')
        .attr('data-wow-delay', '1.5s')
        .attr('data-user-scroll', 'true')
        .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');

      $('#home-arrow')
        .attr('data-wow-delay', '1.5s')
        .attr('data-user-scroll', 'true')
        .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');

      $('#home-arrow-tablet')
        .attr('data-wow-delay', '1.5s')
        .attr('data-user-scroll', 'true')
        .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');

      // fade in about us 1, fade out rest
      if ((scroll >= breakpoint1) && (scroll < breakpoint3)) {
        $('#hero-video, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('hide fadeOut')
          .addClass('fadeIn');
      }
      // fade in about us 2, fade out rest
      else if ((scroll >= breakpoint5) && (scroll < breakpoint7)) {
        $('#aboutus1-fixed, #aboutus-desktop-arrows-1, #aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2')
          .removeClass('hide fadeOut')
          .addClass('fadeIn');
      }
      // fade in about us 3, fade out rest
      else if ((scroll >= breakpoint9) && (scroll < breakpoint11)) {
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus1-fixed, #aboutus-desktop-arrows-1').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus3-fixed, #aboutus-desktop-arrows-3').removeClass('hide fadeOut').addClass('fadeIn');
      }
      else if ((scroll >= breakpoint13) && (scroll < breakpoint15)) {
        $('#aboutus3-fixed, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          addClass('hide');
      }

    } // end scrolling down

    if (scrollingUp) {
      // fade in about us 3, fade out rest
      if ((scroll < breakpoint15) && (scroll >= breakpoint13)) {
        $('#aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeOut')
          .addClass('fadeIn');
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeIn')
          .addClass('fadeOut');
      }
      // fade in about us 2, fade out rest
      else if ((scroll < breakpoint11) && (scroll >= breakpoint9)) {
        $('#aboutus3-fixed, #aboutus-desktop-arrows-3, #aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2')
          .removeClass('fadeOut')
          .addClass('fadeIn');
      }
      else if ((scroll < breakpoint7) && (scroll >= breakpoint5)) {
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeOut')
          .addClass('fadeIn');
      }
      else if ((scroll < breakpoint3) && (scroll >= breakpoint1)) {
        if ($('#aboutus-desktop-nav').data('status-click') !== true) { // Prevent fadeOut when user clicks 'About Us' on navbar
          $('#aboutus1-fixed, #aboutus-desktop-arrows-1, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
            .removeClass('fadeIn')
            .addClass('fadeOut');
          $('#hero-video')
            .removeClass('fadeOut')
            .addClass('fadeIn');
        }
      }
    } // end scrolling up
  }); // end window scroll

  // Prevent fadeOut when user clicks 'About Us' on navbar
  $('#aboutus-desktop-nav').on('click', function() {
    $('#aboutus-desktop-nav').data('status-click', true);
    var resetDataStatusClick = function() {
      $('#aboutus-desktop-nav').data('status-click', false);
    };
    setTimeout(resetDataStatusClick, 2000);
  });

  // About Us Arrow Functions for Desktop
  $(".aboutus-scroll").click(function(event){
    $('html, body').animate({scrollTop: '+=' + parseFloat(breakpoint1 + breakpointThird + breakpointFourth + breakpointFifth + breakpointFifth) + 'px'}, 800);
  });
  $("#aboutus-scroll3").click(function(event){
    $('html, body').animate({scrollTop: '+=' + parseFloat(breakpoint5 + breakpoint1 + breakpointHalf) + 'px'}, 800);
  });

  // Home nav button scrolls to very top of page
  $("a[href='#home']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

}); // end document ready
