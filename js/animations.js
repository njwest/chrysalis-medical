// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {
  var browserHeight = $( window ).height();
  var breakpoint1 = browserHeight;
  var breakpoint2 = browserHeight * 2;
  var previousScroll = 0;
  var currentDiv = 'aboutus1';
  var aTop;
  var scroll;
  var scrollTopSpeed = 1250;
  var arrowFadeOut = function() {
      $('#down-arrow-div').addClass('fadeOut');
  };
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
      }, scrollTopSpeed);
    $('.aboutus2-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '3s');
    $('#dimer-left').removeClass('hide').addClass('slideInRight pulse infinite');
  }; // end scrollDownToAboutus2

  var scrollDownToAboutus3 = function() {
    $('.aboutus2-text').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus3").offset().top
      }, scrollTopSpeed);
    $('.aboutus3-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '3s');
    $('#dimer-right').removeClass('hide').addClass('slideInRight pulse infinite').attr('data-wow-delay', '3s');
    $('#dna-green').removeClass('hide').addClass('fadeIn pulse infinite').attr('data-wow-delay', '5s');
  }; // end scrollDownToAboutus3

  var scrollDownToHowwework = function() {
    $('.aboutus3-text').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#howwework").offset().top
      }, scrollTopSpeed);
    arrowFadeOut();
  }; // end scrollDownToHowwework

  var scrollUpToAboutus1 = function() {
    console.log('scrollUpToAboutus1 fired');
    $('.aboutus1-text').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus1").offset().top
      }, scrollTopSpeed);
  }; // end scrollUpToAboutus1

  // Prevent Window Scroll function from interrupting SmoothScroll
  var navClick = false;
  $('.nav-links').on('click', function(e) {
    navClick = true;
    var elementId = $(this).attr("id");
    if (elementId != 'aboutus1-link') {
      arrowFadeOut();
      console.log('navClick = ', navClick);
      e.preventDefault();
      return false;
    }
    else if (elementId === 'aboutus1-link') {
      e.preventDefault();
      scrollUpToAboutus1();
      navClick = false;
      console.log('navClick = ', navClick);
    }
    // console.log('navClick = ', navClick);
    var resetNavClick = function () {
      navClick = false;
      console.log('resetNavClick fired. navClick = ', navClick);
    };
    setTimeout(resetNavClick, 3000);
  });

  // Mouse scroll controller
  $(window).scroll(function() {
    if (navClick === false) {
      scroll = $(window).scrollTop();

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
      else if (breakpoint2 >= scroll) {
        currentDiv = 'aboutus3';
      }
      else if (currentDiv === 'aboutus3') {
        directionCheck();
        if (scrollingDown) {
          aTop = ($('#aboutus3').height() / 2);
          if ($(this).scrollTop()>=aTop){
            scrollDownToHowwework();
            currentDiv = 'howwework initiated';
          }
        }
      }

      // Reset scroll settings
      if (scroll === 0) {
        $('.aboutus1-text').removeClass('fadeOut').addClass('fadeIn');
        $('#down-arrow-div').removeClass('fadeOut').addClass('fadeIn');
        currentDiv = 'aboutus1';
        clickCount = 0;
      }

    } // end navClick

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
    else if (clickCount === 3) {
      scrollDownToHowwework();
    }
  }); // end #downarrow click function

}); // End document.ready()
