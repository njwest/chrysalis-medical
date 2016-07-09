$(document).ready(function() {

  var breakpoint1 = 1000;
  var breakpoint2 = 3000;
  var breakpoint3 = 4000;
  var breakpoint4 = 5000;
  var previousScroll = 0;
  var scrollingUp;
  var scrollingDown;


  // Hide about us descriptions 2 & 3 on page load
//   $('#aboutus2').addClass('hide');
//   $('#aboutus3').addClass('hide');

  // Hide and show aboutus descriptions on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var directionCheck = function() {
      if (previousScroll < scroll) {
        console.log('previousScroll = ', previousScroll);
        console.log('scroll = ', scroll);
        scrollingDown = true;
        scrollingUp = false;
        console.log('User is scrolling down');
        previousScroll = scroll;
      }
      else if (scroll < previousScroll) {
        console.log('previousScroll = ', previousScroll);
        console.log('scroll = ', scroll);
        scrollingDown = false;
        scrollingUp = true;
        console.log('User is scrolling up');
        previousScroll = scroll;
      }
    };
    // SCROLLING DOWN
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
      }
    }

    // SCROLLING UP
    // Show aboutus3
    if ((scroll < breakpoint4) && (scroll >= breakpoint3)) {
      directionCheck();
      if (scrollingUp) {
        $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus3').removeClass('fadeOut').addClass('fadeIn');
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
