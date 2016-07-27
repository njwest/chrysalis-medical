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

      // $('#home-arrow')
      //   .attr('data-wow-delay', '1.5s')
      //   .attr('data-user-scroll', 'true')
      //   .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');
      //
      // $('#home-arrow-tablet')
      //   .attr('data-wow-delay', '1.5s')
      //   .attr('data-user-scroll', 'true')
      //   .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');

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
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('hide fadeOut')
          .addClass('fadeIn');
      }
      // fade out all
      else if ((scroll >= breakpoint13) && (scroll < breakpoint15)) {
        $('#aboutus3-fixed, #aboutus-desktop-arrows-3, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeIn')
          .addClass('fadeOut');
      }

    } // end scrolling down

    if (scrollingUp) {
      // fade in about us 3, fade out rest
      if ((scroll < breakpoint15) && (scroll >= breakpoint13)) {
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeOut')
          .addClass('fadeIn');
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
      // fade in about us 1, fade out rest
      else if ((scroll < breakpoint7) && (scroll >= breakpoint5)) {
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeOut')
          .addClass('fadeIn');
      }
      // fade in home, fade out rest
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
      // fade in home, fade out rest when user is at about us 1 and clicks on home in tablet
      else if (scroll === 0) {
        $('#aboutus1-fixed, #aboutus-desktop-arrows-1, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#hero-video')
          .removeClass('fadeOut')
          .addClass('fadeIn');
      }
    } // end scrolling up

  }); // end window scroll

  // Prevent fadeOut when user clicks 'About Us' on navbar
  $('#aboutus-desktop-nav, #aboutus-tablet-nav, #aboutus-mobile-scroll').on('click', function() {
    $('#aboutus-desktop-nav').data('status-click', true);
    var resetDataStatusClick = function() {
      $('#aboutus-desktop-nav').data('status-click', false);
    };
    setTimeout(resetDataStatusClick, 2000);
  });

  // About Us Arrow Functions for Desktop
  // $("#home-arrow-anchor").click(function(event){
  //   $('html, body').animate({scrollTop: '+=' + parseFloat(breakpoint3) + 'px'}, 800);
  //   console.log('home arrow distance = ', parseFloat(breakpoint3));
  // });
  // $("#aboutus1-arrow-anchor").click(function(event){
  //   $('html, body').animate({scrollTop: '+=' + parseFloat(breakpoint3) + 'px'}, 800);
  //   console.log('aboutus1 arrow distance = ', parseFloat(breakpoint3));
  // });
  // $("#aboutus2-arrow-anchor").click(function(event){
  //   $('html, body').animate({scrollTop: '+=' + parseFloat(breakpoint3 + breakpointHalf) + 'px'}, 800);
  //   console.log('aboutus 2 distance = ', parseFloat(breakpoint3 + breakpointHalf));
  // });
  // $("#aboutus3-arrow-anchor").click(function(event){
  //   $('html, body').animate({scrollTop: '+=' + parseFloat(breakpoint5 + breakpointHalf) + 'px'}, 800);
  //   console.log('aboutus 3 distance = ', parseFloat(breakpoint5 + breakpointHalf));
  // });

  // Home nav button scrolls to very top of page
  $("a[href='#home']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // About Us nav button scrolls correctly for tablet
  $("#aboutus-tablet-nav").click(function() {
    $("html, body").animate({ scrollTop: breakpoint2 }, "slow");
    return false;
  });

  // Mobile Nav (smoothScroll doesn't work properly on mobile)
  $('#aboutus-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#home').offset().top -50 }, "slow");
    console.log('aboutus-mobile-scroll fired');
  });
  $('#howwework-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#howwework').offset().top -350 }, "slow");
    console.log('howwework-mobile-scroll fired');
  });
  $('#expertise-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#expertise').offset().top -350 }, "slow");
    console.log('expertise-mobile-scroll fired');
  });
  $('#contactus-mobile-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('#contactus').offset().top -350 }, "slow");
    console.log('contactus-mobile-scroll fired');
  });

}); // end document ready
