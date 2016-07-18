// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {
  var browserHeight = $( window ).height();
  var breakpoint1 = browserHeight * .33;
  console.log('breakpoint1 =', breakpoint1);
  var breakpoint2 = browserHeight * .75;
  console.log('breakpoint2 =', breakpoint2);
  var breakpoint3 = browserHeight;
  console.log('breakpoint3 =', breakpoint3);
  var breakpoint4 = browserHeight * 9;
  var previousScroll = 0;
  var scrollingUp = 'currently-not-scrolling';
  var scrollingDown = 'currently-not-scrolling';
  var currentDiv = 'aboutus1';
  var aTop;
  var scroll = 0;
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


  // Mouse scroll controller
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    console.log('scroll = ', scroll);
    if (currentDiv === 'aboutus1') {
      directionCheck();
      if (scrollingDown) {
        aTop = $('#aboutus1').height();
        if($(this).scrollTop()>=aTop){
          scrollToAboutus2();
          currentDiv = 'aboutus2 initiated';
          scrollingDown = 'currently-not-scrolling';
        }
      }
    }
    else if (breakpoint3 >= scroll) {
      currentDiv = 'aboutus2';
    }
    else if (currentDiv === 'aboutus2') {
      directionCheck();
      if (scrollingDown) {
        aTop = $('#aboutus2').height();
        if($(this).scrollTop()>=aTop){
          scrollToAboutus3();
          currentDiv = 'aboutus3';
          scrollingDown = 'currently-not-scrolling';
        }
      }
    }
  });




  // Down arrow controller
  var firstTimeScrolling = true;
  var clickCount = 0;
  var scrollToAboutus2 = function() {
    $('.aboutus1-text').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus2").offset().top
      }, 1500);
    $('.aboutus2-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
    $('#dimer-left').removeClass('hide').addClass('fadeIn pulse infinite');
  }; // and scrollToAboutus2

  var scrollToAboutus3 = function() {
    $('.aboutus2-text').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus3").offset().top
      }, 1500);
    $('.aboutus3-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
    $('#dimer-right').removeClass('hide').addClass('fadeIn pulse infinite');
    $('#dna-green').removeClass('hide').addClass('fadeIn pulse infinite').attr('data-wow-delay', '2s');
    $('#down-arrow-div').addClass('fadeOut');

  }; // end scrollToAboutus3

  $('#down-arrow').on('click', function() {
    clickCount++;
    if (clickCount === 1) {
      scrollToAboutus2();
    }
    else if (clickCount === 2) {
      scrollToAboutus3();
    }
  }); // end #downarrow click function

}); // End document.ready()
