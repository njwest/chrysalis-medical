// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {

  var browserHeight = $( window ).height();
  console.log(browserHeight);
  var breakpoint1 = browserHeight;
  var breakpoint2 = browserHeight * 4;
  var breakpoint3 = browserHeight * 6;
  var breakpoint4 = browserHeight * 9;
  var previousScroll = 0;
  var scrollingUp;
  var scrollingDown;

  // Hide and show aboutus descriptions on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var directionCheck = function() {
      if (previousScroll < scroll) {
        scrollingDown = true;
        scrollingUp = false;
        console.log('User is scrolling down');
        console.log('----------------------');
        previousScroll = scroll;
      }
      else if (scroll < previousScroll) {
        scrollingDown = false;
        scrollingUp = true;
        console.log('User is scrolling up');
        console.log('----------------------');
        previousScroll = scroll;
      }
    };

    /*****************
    * SCROLLING DOWN *
    *****************/
    // Show aboutus2
    if ((scroll >= breakpoint1) && (scroll < breakpoint2)) {
      directionCheck();
      if (scrollingDown) {
        $('#aboutus1').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus2').removeClass('hide fadeOut').addClass('fadeIn');
        console.log('scrolling down, showing 2');
      }
    }

    // Show aboutus3
    if ((scroll >= breakpoint2) && (scroll < breakpoint3)) {
      directionCheck();
      if (scrollingDown) {
        $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus3').removeClass('hide fadeOut').addClass('fadeIn');
        console.log('scrolling down, showing 3');
      }
    }

    // Hide aboutus3
    if (scroll >= breakpoint3) {
      directionCheck();
      if (scrollingDown) {
        $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
        console.log('scrolling down, hiding 3');
        $('#down-arrow').removeClass('fadeIn').addClass('fadeOut');
      }
    }

    /***************
    * SCROLLING UP *
    ***************/
    // Show aboutus3
    if ((scroll < breakpoint4) && (scroll >= breakpoint3)) {
      directionCheck();
      if (scrollingUp) {
        $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus3').removeClass('fadeOut').addClass('fadeIn');
        $('#down-arrow').removeClass('fadeOut').addClass('fadeIn');
        console.log('scrolling up, showing 3');
      }
    }

    // Show aboutus2
    if ((scroll < breakpoint3) && (scroll >= breakpoint2)) {
      directionCheck();
      if (scrollingUp) {
        $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus2').removeClass('fadeOut').addClass('fadeIn');
        console.log('scrolling up, showing 2');
      }
    }

    // Show aboutus1
    if (scroll < breakpoint1) {
      directionCheck();
      if (scrollingUp) {
        $('#aboutus1').removeClass('fadeOut').addClass('fadeIn');
        $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
        console.log('scrolling up, showing 1');
      }
    }

  });

});
