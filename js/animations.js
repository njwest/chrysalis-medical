// Start at top of page on refresh - Necessary for animation to work properly
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {
  var browserHeight = $( window ).height();
  console.log(browserHeight);
  var breakpoint1 = browserHeight / 3;
  var breakpoint2 = browserHeight * 4;
  var breakpoint3 = browserHeight * 6;
  var breakpoint4 = browserHeight * 9;
  var previousScroll = 0;
  var scrollingUp = 'currently-not-scrolling';
  var scrollingDown = 'currently-not-scrolling';
  var currentDiv = 'aboutus1';
  var aTop;
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

  // $(window).scroll(function() {
  //   if (currentDiv === 'aboutus1') {
  //     directionCheck();
  //     if (scrollingDown) {
  //       aTop = $('#aboutus1').height();
  //       if($(this).scrollTop()>=aTop){
  //         scrollToAboutus2();
  //         currentDiv = 'aboutus2';
  //         console.log('#aboutus1 scroll fired!!!!!');
  //         scrollingDown = 'currently-not-scrolling';
  //       }
  //     }
  //   }
  //   else if (currentDiv === 'aboutus2') {
  //     directionCheck();
  //     if (scrollingDown) {
  //       aTop = $('#aboutus2').height();
  //       if($(this).scrollTop()>=aTop){
  //         scrollToAboutus3();
  //         currentDiv = 'aboutus3';
  //         console.log('#aboutus2 scroll fired!!!!!');
  //         scrollingDown = 'currently-not-scrolling';
  //       }
  //     }
  //   }
  // });

  // $('#aboutus1').on('mouseenter', function() {
  //   console.log('#aboutus1 scroll fired!!!!!');
  //   scrollToAboutus2();
  // });



  // Hide and show aboutus descriptions on scroll
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     var directionCheck = function() {
//       if (previousScroll < scroll) {
//         scrollingDown = true;
//         scrollingUp = false;
//         // console.log('User is scrolling down');
//         // console.log('----------------------');
//         previousScroll = scroll;
//       }
//       else if (scroll < previousScroll) {
//         scrollingDown = false;
//         scrollingUp = true;
//         // console.log('User is scrolling up');
//         // console.log('----------------------');
//         previousScroll = scroll;
//       }
//     };
//
//
//
//     /*****************
//     * SCROLLING DOWN *
//     *****************/
//     // Show aboutus2
//     if ((scroll >= breakpoint1) && (scroll < breakpoint2)) {
//       directionCheck();
//       if (scrollingDown) {
//         console.log('Show aboutus 2 scroll down fired');
//       }
//     }
//
//     // Show aboutus3
//     if ((scroll >= breakpoint2) && (scroll < breakpoint3)) {
//       directionCheck();
//       if (scrollingDown) {
//         console.log('Show aboutus 3 scroll down fired');
//       }
//     }
//
//     // Hide aboutus3
//     if (scroll >= breakpoint3) {
//       directionCheck();
//       if (scrollingDown) {
//         console.log('Hide aboutus 3 scroll down fired');
//       }
//     }
//     /***************
//     * SCROLLING UP *
//     ***************/
//     // Show aboutus3
//     if ((scroll < breakpoint4) && (scroll >= breakpoint3)) {
//       directionCheck();
//       if (scrollingUp) {
//         console.log('Show aboutus 3 scroll up fired');
//       }
//     }
//
//     // Show aboutus2
//     if ((scroll < breakpoint3) && (scroll >= breakpoint2)) {
//       directionCheck();
//       if (scrollingUp) {
//         console.log('Show aboutus 2 scroll up fired')
//       }
//     }
//
//     // Show aboutus1
//     if (scroll < breakpoint1) {
//       directionCheck();
//       if (scrollingUp) {
//         console.log('Show aboutus 1 scroll up fired')
//       }
//     }
//
//   }); // end window scroll function



  // Down arrow controller
  var firstTimeScrolling = true;
  console.log('firstTimeScrolling = ', firstTimeScrolling);
  var clickCount = 0;
  console.log('clickCount = ', clickCount);

  var scrollToAboutus2 = function() {
    $('.aboutus1-text').addClass('fadeOut');
    $('html, body').animate({
        scrollTop: $("#aboutus2").offset().top
      }, 1500);
    $('.aboutus2-text').removeClass('hide fadeOut').addClass('fadeIn').attr('data-wow-delay', '2s');
    $('#dimer-left').removeClass('hide').addClass('fadeIn pulse infinite');
    console.log('scrollToAboutus2 fired');
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
    console.log('scrollToAboutus3 fired');
    // if (firstTimeScrolling === true) {
    //   console.log('if fired');
    //   $('html, body').animate({
    //     scrollTop: $("#aboutus3").offset().top
    //   }, 1500);
    //   firstTimeScrolling = false;
    //   console.log('firstTimeScrolling = ', firstTimeScrolling);
    // } else {
    //   console.log('else fired');
    //   $('html, body').animate({
    //     scrollTop: $("#aboutus3").offset().top
    //   }, 1500);
    //   console.log('firstTimeScrolling = ', firstTimeScrolling);
    // }
    // $('#aboutus1').removeClass('fadeOut').show();
    // $('#aboutus2').removeClass('fadeOut').show();

  }; // end scrollToAboutus3

  $('#down-arrow').on('click', function() {
    clickCount++;
    console.log('clickCount = ', clickCount);
    if (clickCount === 1) {
      scrollToAboutus2();
    }
    else if (clickCount === 2) {
      scrollToAboutus3();
    }

  }); // end #downarrow click function

}); // End document.ready()
