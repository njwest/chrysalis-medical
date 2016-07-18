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
  // var breakpoint3 = browserHeight;
  // var breakpoint4 = browserHeight * 1.5;
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
      console.log('scrolling down');
    }
    else if (scroll < previousScroll) {
      scrollingDown = false;
      scrollingUp = true;
      previousScroll = scroll;
      console.log('scrolling up');
    }
  };


  // Mouse scroll controller
  $(window).scroll(function() {
    scroll = $(window).scrollTop();

    // Scrolling Down
    if (currentDiv === 'aboutus1') {
      directionCheck();
      if (scrollingDown) {
        aTop = ($('#aboutus1').height() / 2);
        if($(this).scrollTop()>=aTop){
          scrollDownToAboutus2();
          currentDiv = 'aboutus2 initiated';
          scrollingDown = 'currently-not-scrolling';
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
          scrollingDown = 'currently-not-scrolling';
        }
      }
      else if (scrollingUp) {
        aTop = ($('#aboutus2').height() / 2);
        if ($(this).scrollTop()>=aTop){
          scrollUpToAboutus1();
          currentDiv = 'aboutus3 initiated';
          scrollingDown = 'currently-not-scrolling';
        }
      }
    }
    // Scrolling Up
    // else if (breakpoint2 <= scroll) {
    //   currentDiv = 'aboutus3';
    // }
    // else if (currentDiv === 'aboutus3') {
    //   directionCheck();
    //   if (scrollingUp) {
    //     scrollUpToAboutus2();
    //     currentDiv = 'aboutus2 initiated';
    //   }
    // }
    // else if (breakpoint1 < scroll) {
    //   currentDiv = 'aboutus2';
    // }
    // else if (currentDiv === 'aboutus2') {
    //   directionCheck();
    //   if (scrollingUp) {
    //     scrollUpToAboutus1();
    //     console.log('scrolling up fired');
    //   }
    // }
  });




  // Scroll Functions
  var scrollDownToAboutus2 = function() {
    $('.aboutus1-text').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus2").offset().top
      }, 1500);
    $('.aboutus2-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
    $('#dimer-left').removeClass('hide').addClass('slideInRight pulse infinite');
  }; // and scrollDownToAboutus2

  var scrollDownToAboutus3 = function() {
    $('.aboutus2-text').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus3").offset().top
      }, 1500);
    $('.aboutus3-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
    $('#dimer-right').removeClass('hide').addClass('slideInRight pulse infinite').attr('data-wow-delay', '3s');
    $('#dna-green').removeClass('hide').addClass('fadeIn pulse infinite').attr('data-wow-delay', '5s');
    $('#down-arrow-div').addClass('fadeOut');
  }; // end scrollDownToAboutus3

  var scrollUpToAboutus1 = function() {
    console.log('scrollUpToAboutus1 fired!')
    $('.aboutus2-text').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus1").offset().top
      }, 1500);
    $('.aboutus1-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
  }; // and scrollUpToAboutus1

  var scrollUpToAboutus2 = function() {
    $('.aboutus3-text').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus2").offset().top
      }, 1500);
    $('.aboutus2-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
  }; // and scrollUpToAboutus2

  // Down arrow controller
  var firstTimeScrolling = true;
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
