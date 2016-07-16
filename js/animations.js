// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {

  var browserHeight = $( window ).height();
  // console.log(browserHeight);
  var breakpoint1 = browserHeight;
  var breakpoint2 = browserHeight * 4;
  var breakpoint3 = browserHeight * 6;
  var breakpoint4 = browserHeight * 9;
  var previousScroll = 0;
  var scrollingUp;
  var scrollingDown;

  /*****************
  * SCROLLING DOWN *
  *****************/
  // Show aboutus2
  if ((scroll >= breakpoint1) && (scroll < breakpoint2)) {
    directionCheck();
    if (scrollingDown) {
      $('#aboutus1').removeClass('fadeIn').addClass('fadeOut');
      $('#aboutus2').removeClass('hide fadeOut').addClass('fadeIn');
      // console.log('scrolling down, showing 2');
    }
  }

  // Show aboutus3
  if ((scroll >= breakpoint2) && (scroll < breakpoint3)) {
    directionCheck();
    if (scrollingDown) {
      $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
      $('#aboutus3').removeClass('hide fadeOut').addClass('fadeIn');
      // console.log('scrolling down, showing 3');
    }
  }

  // Hide aboutus3
  if (scroll >= breakpoint3) {
    directionCheck();
    if (scrollingDown) {
      $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
      // console.log('scrolling down, hiding 3');
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
      // console.log('scrolling up, showing 3');
    }
  }

  // Show aboutus2
  if ((scroll < breakpoint3) && (scroll >= breakpoint2)) {
    directionCheck();
    if (scrollingUp) {
      $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
      $('#aboutus2').removeClass('fadeOut').addClass('fadeIn');
      // console.log('scrolling up, showing 2');
    }
  }

  // Show aboutus1
  if (scroll < breakpoint1) {
    directionCheck();
    if (scrollingUp) {
      $('#aboutus1').removeClass('fadeOut').addClass('fadeIn');
      $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
      // console.log('scrolling up, showing 1');
    }
  }


  // Down arrow controller
  var firstTimeScrolling = true;
  console.log('firstTimeScrolling = ', firstTimeScrolling);
  var clickCount = 0;
  console.log('clickCount = ', clickCount);

  var scrollToAboutus2 = function() {
    $('#aboutus1').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus2").offset().top
      }, 1500);
    $('#aboutus2').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
    console.log('scrollToAboutus2 fired');
  }; // and scrollToAboutus2

  var scrollToAboutus3 = function() {
    $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
    if (firstTimeScrolling === true) {
      console.log('if fired');
      $('html, body').animate({
        scrollTop: $("#aboutus3").offset().top
      }, 1500);
      firstTimeScrolling = false;
      console.log('firstTimeScrolling = ', firstTimeScrolling);
    } else {
      console.log('else fired');
      $('html, body').animate({
        scrollTop: $("#aboutus3").offset().top
      }, 1500);
      console.log('firstTimeScrolling = ', firstTimeScrolling);
    }
    $('#aboutus1').removeClass('fadeOut').show();
    $('#aboutus2').removeClass('fadeOut').show();
    $('#down-arrow-div').addClass('fadeOut');
    console.log('scrollToAboutus3 fired');
  }; // end scrollToAboutus3

  $('#down-arrow').on('click', function() {
    clickCount++
    console.log('clickCount = ', clickCount);
    if (clickCount === 1) {
      scrollToAboutus2();
    }
    else if (clickCount === 2) {
      scrollToAboutus3();
    }

  }); // end #downarrow click function

}); // End document.ready()
