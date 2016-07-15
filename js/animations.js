// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {

  var browserHeight = $( window ).height();
  // console.log(browserHeight);
  var breakpoint1 = browserHeight / 2;
  var breakpoint2 = breakpoint1 * 1.5;
  var breakpoint3 = browserHeight * 3;
  var breakpoint4 = browserHeight * 4;
  var previousScroll = 0;
  var scrollingUp;
  var scrollingDown;

  // Hide and show aboutus descriptions on scroll
  $(window).scroll(function() {
    // console.log(browserHeight);
    var scroll = $(window).scrollTop();
    // console.log('scroll = ', scroll);

    var directionCheck = function() {
      if (previousScroll < scroll) {
        scrollingDown = true;
        scrollingUp = false;
        // console.log('User is scrolling down');
        // console.log('----------------------');
        previousScroll = scroll;
      }
      else if (scroll < previousScroll) {
        scrollingDown = false;
        scrollingUp = true;
        // console.log('User is scrolling up');
        // console.log('----------------------');
        previousScroll = scroll;
      }
    }; // end directionCheck

    if (scroll === 0) {
      $('#aboutus1').removeClass('fadeOut').addClass('fadeIn');
      clickCount = 0;
      console.log('clickCount reset to ', clickCount);
    }

    // Flip arrow when use scrolls to bottom
    // if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    //   $('#arrow-img').toggleClass('flip');
    // }

    /*****************
    * SCROLLING DOWN *
    *****************/
    // Show aboutus2
    // console.log('breakpoint1 = ', breakpoint1);
    // console.log('breakpoint2 = ', breakpoint2);
    if ((scroll > breakpoint1) && (scroll < breakpoint2)) {
      // console.log('breakpoint1 = ', breakpoint1);
      // console.log('breakpoint2 = ', breakpoint2);
      // directionCheck();
      // if (scrollingDown) {
      //   scrollToAboutus2();
      // }
    }

    // Show aboutus3
    if ((scroll >= breakpoint2) && (scroll < breakpoint3)) {
      directionCheck();
      if (scrollingDown) {

      }
    }

    // Hide aboutus3
    if (scroll >= breakpoint3) {
      directionCheck();
      if (scrollingDown) {

      }
    }

    /***************
    * SCROLLING UP *
    ***************/
    // Show aboutus3
    if ((scroll < breakpoint4) && (scroll >= breakpoint3)) {
      directionCheck();
      if (scrollingUp) {

      }
    }

    // Show aboutus2
    if ((scroll < breakpoint3) && (scroll >= breakpoint2)) {
      directionCheck();
      if (scrollingUp) {

      }
    }

    // Show aboutus1
    if (scroll < breakpoint1) {
      directionCheck();
      if (scrollingUp) {

      }
    }

  });

  // Fade in #down-arrow
  // $("#down-arrow").hide().delay(11000).fadeIn(500);

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
        scrollTop: $("#howwework").offset().top
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
    $('#aboutus3').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '1s');
    console.log('scrollToAboutus3 fired');
  }; // end scrollToAboutus3

  var scrollToHowwework = function() {
    $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
      scrollTop: $("#howwework").offset().top
    }, 1500);
    console.log('scrollToHowwework fired');
  }; // end scrollToHowwework

  var scrollToExpertise = function() {
    $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
      scrollTop: $("#expertise").offset().top
    }, 1500);
    console.log('scrollToExpertise fired');
  }; // end scrollToExpertise

  var scrollToContact = function() {
    $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1500);
    // $('#down-arrow-div').addClass('fadeOut');
    // $('#up-arrow-div').removeClass('hide').addClass('fadeIn');
    $('#arrow-img').toggleClass('flip');
    console.log('scrollToContact fired');
  }; // end scrollToContact

  var scrollToHome = function() {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 1500);
    $('#aboutus1').removeClass('fadeOut').addClass('fadeIn');
    $('#arrow-img').toggleClass('flip');
  }

  $('#down-arrow').on('click', function() {
    clickCount++
    console.log('clickCount = ', clickCount);
    if (clickCount === 1) {
      scrollToAboutus2();
    }
    else if (clickCount === 2) {
      scrollToAboutus3();
    }
    else if (clickCount === 3) {
      scrollToHowwework();
    }
    else if (clickCount === 4) {
      scrollToExpertise();
    }
    else if (clickCount === 5) {
      scrollToContact();
    }
    else if (clickCount === 6) {
      scrollToHome();
    }

  }); // end #downarrow click function


  $('#howwework').scroll(function() {
    console.log('scroll function fired');
    scrollToAboutus2();
  });


  /************************************
  // Old Scrolling Animations
  ************************************/
  //
  //     /*****************
  //     * SCROLLING DOWN *
  //     *****************/
  //     // Show aboutus2
  //     if ((scroll >= breakpoint1) && (scroll < breakpoint2)) {
  //       directionCheck();
  //       if (scrollingDown) {
  //         $('#aboutus1').removeClass('fadeIn').addClass('fadeOut');
  //         $('#aboutus2').removeClass('hide fadeOut').addClass('fadeIn');
  //         // console.log('scrolling down, showing 2');
  //       }
  //     }
  //
  //     // Show aboutus3
  //     if ((scroll >= breakpoint2) && (scroll < breakpoint3)) {
  //       directionCheck();
  //       if (scrollingDown) {
  //         $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
  //         $('#aboutus3').removeClass('hide fadeOut').addClass('fadeIn');
  //         // console.log('scrolling down, showing 3');
  //       }
  //     }
  //
  //     // Hide aboutus3
  //     if (scroll >= breakpoint3) {
  //       directionCheck();
  //       if (scrollingDown) {
  //         $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
  //         // console.log('scrolling down, hiding 3');
  //         $('#down-arrow').removeClass('fadeIn').addClass('fadeOut');
  //       }
  //     }
  //
  //     /***************
  //     * SCROLLING UP *
  //     ***************/
  //     // Show aboutus3
  //     if ((scroll < breakpoint4) && (scroll >= breakpoint3)) {
  //       directionCheck();
  //       if (scrollingUp) {
  //         $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
  //         $('#aboutus3').removeClass('fadeOut').addClass('fadeIn');
  //         $('#down-arrow').removeClass('fadeOut').addClass('fadeIn');
  //         // console.log('scrolling up, showing 3');
  //       }
  //     }
  //
  //     // Show aboutus2
  //     if ((scroll < breakpoint3) && (scroll >= breakpoint2)) {
  //       directionCheck();
  //       if (scrollingUp) {
  //         $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
  //         $('#aboutus2').removeClass('fadeOut').addClass('fadeIn');
  //         // console.log('scrolling up, showing 2');
  //       }
  //     }
  //
  //     // Show aboutus1
  //     if (scroll < breakpoint1) {
  //       directionCheck();
  //       if (scrollingUp) {
  //         $('#aboutus1').removeClass('fadeOut').addClass('fadeIn');
  //         $('#aboutus2').removeClass('fadeIn').addClass('fadeOut');
  //         // console.log('scrolling up, showing 1');
  //       }
  //     }
  //

}); // End document.ready()
