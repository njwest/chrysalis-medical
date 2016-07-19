// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {
  var browserHeight = $( window ).height();
  var breakpoint1 = browserHeight;
  console.log('breakpoint1 =', breakpoint1);
  var breakpoint2 = browserHeight * 2;
  console.log('breakpoint2 =', breakpoint2);
  var previousScroll = 0;
  var currentDiv = 'aboutus1';
  var aTop;
  var scroll;
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
  // Scroll Functions
  var scrollDownToAboutus2 = function() {
    $('.aboutus1-text').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus2").offset().top
      }, 1500);
    $('.aboutus2-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '3s');
    $('#dimer-left').removeClass('hide').addClass('slideInRight pulse infinite');
  }; // end scrollDownToAboutus2

  var scrollDownToAboutus3 = function() {
    $('.aboutus2-text').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus3").offset().top
      }, 1500);
    $('.aboutus3-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '3s');
    $('#dimer-right').removeClass('hide').addClass('slideInRight pulse infinite').attr('data-wow-delay', '3s');
    $('#dna-green').removeClass('hide').addClass('fadeIn pulse infinite').attr('data-wow-delay', '5s');
    $('#down-arrow-div').addClass('fadeOut');
  }; // end scrollDownToAboutus3

  // Mouse scroll controller
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    console.log('scroll = ', scroll);

    // Scrolling Down
    if (currentDiv === 'aboutus1') {
      directionCheck();
      if (scrollingDown) {
        aTop = ($('#aboutus1').height() / 2);
        if($(this).scrollTop()>=aTop){
          scrollDownToAboutus2();
          currentDiv = 'aboutus2 initiated';
        }
      }
    }
    else if (breakpoint1 >= scroll) {
      currentDiv = 'aboutus2';
    }
    else if (currentDiv === 'aboutus2') {
      directionCheck();
      if (scrollingDown) {
        aTop = ($('#aboutus2').height() / 2);
        if ($(this).scrollTop()>=aTop){
          scrollDownToAboutus3();
          currentDiv = 'aboutus3 initiated';
        }
      }
    }
    if (scroll === 0) {
      $('.aboutus1-text').removeClass('fadeOut').addClass('fadeIn');
      $('#down-arrow-div').removeClass('fadeOut').addClass('fadeIn');
      currentDiv = 'aboutus1';
      clickCount = 0;
    }
  }); // end window scroll function

  // Down arrow controller
  var clickCount = 0;
  $('#down-arrow').on('click', function() {
    clickCount++;
    if (clickCount === 1) {
      scrollDownToAboutus2();
    }
    else if (clickCount === 2) {
      scrollDownToAboutus3();
    }
  }); // end #downarrow click function

}); // End document.ready()
