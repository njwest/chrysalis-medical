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
  var breakpoint16 = breakpoint15 + breakpoint1;
  var breakpoint17 = breakpoint16 + breakpoint1;
  var breakpoint18 = breakpoint17 + breakpoint1;
  var breakpoint19 = breakpoint18 + breakpoint1;
  var breakpoint20 = breakpoint19 + breakpoint1;
  var breakpoint21 = breakpoint20 + breakpoint1;
  var breakpoint22 = breakpoint21 + breakpoint1;
  var breakpoint23 = breakpoint22 + breakpoint1;
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
  var green = '#A4B447';
  var blue = '#28779F';

  // Check for Internet Explorer
  (function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var ieVersionNumber = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));

    if (ieVersionNumber < 11 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer Version is < 11
    {
      console.log('This browser is internet explorer.');
      console.log('Internet Explorer Version = ', parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      $('#aboutus-desktop').addClass('hide');
      $('#static-version').removeClass('hide').addClass('show');
    }
    else  // If another browser, return 0
    {
      console.log('This browser is not internet explorer.');
    }
    return false;
  })();

  // Greenify 'Home' link in navbar on load
  $("a[href='#home']")
    .css('color', green);

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
        $('#home, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('hide fadeOut')
          .addClass('fadeIn');
        $("a[href='#home'], a[href='#howwework'], a[href='#expertise'], a[href='#contactus']")
          .css('color', blue);
        $("#aboutus-desktop-nav, #aboutus-tablet-nav")
          .css('color', green);
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
          $("#aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#home'], a[href='#expertise'], a[href='#contactus']")
            .css('color', blue);
          $("a[href='#howwework']")
            .css('color', green);
      }
      // expertise nav turns green
      else if ((scroll >= breakpoint17) && (scroll < breakpoint19)) {
          $("a[href='#howwework'], #aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#home'], a[href='#contactus']")
            .css('color', blue);
          $("a[href='#expertise']")
            .css('color', green);
      }
      // contact us nav turns green
      else if ((scroll >= breakpoint20) && (scroll < breakpoint23)) {
          $("a[href='#expertise'], a[href='#howwework'], #aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#home']")
            .css('color', blue);
          $("a[href='#contactus']")
            .css('color', green);
      }

    } // end scrolling down

    if (scrollingUp) {
      // expertise nav turns green
      if ((scroll < breakpoint20) && (scroll >= breakpoint18)) {
          $("a[href='#contactus'], a[href='#howwework'], #aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#home']")
            .css('color', blue);
          $("a[href='#expertise']")
            .css('color', green);
      }
      // how we work nav turns green
      else if ((scroll < breakpoint17) && (scroll >= breakpoint16)) {
          $("a[href='#expertise'], a[href='#contactus'], #aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#home']")
            .css('color', blue);
          $("a[href='#howwework']")
            .css('color', green);
      }
      // fade in about us 3, fade out rest
      else if ((scroll < breakpoint15) && (scroll >= breakpoint13)) {
        $('#aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus1-fixed, #aboutus-desktop-arrows-1')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeOut')
          .addClass('fadeIn');
        $("a[href='#howwework'], a[href='#expertise'], a[href='#contactus'], a[href='#home']")
          .css('color', blue);
        $("#aboutus-desktop-nav, #aboutus-tablet-nav")
          .css('color', green);
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
          $('#home')
            .removeClass('fadeOut')
            .addClass('fadeIn');
          $("#aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#expertise'], a[href='#contactus'], a[href='#howwework']")
            .css('color', blue);
          $("a[href='#home']")
            .css('color', green);
        }
      }
      // fade in home, fade out rest when user is at about us 1 and clicks on home in tablet
      else if (scroll === 0) {
        $('#aboutus1-fixed, #aboutus-desktop-arrows-1, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
          .removeClass('fadeIn')
          .addClass('fadeOut');
        $('#home')
          .removeClass('fadeOut')
          .addClass('fadeIn');
        $("#aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#expertise'], a[href='#contactus'], a[href='#howwework']")
          .css('color', blue);
        $("a[href='#home']")
          .css('color', green);
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
  // About Us nav button scrolls to About Us 1
  $("a[href='#aboutus']").click(function() {
    $("html, body").animate({ scrollTop: $('#howwework').offset().top -5000 }, "slow");
    $('#home, #aboutus2-fixed, #aboutus-desktop-arrows-2, #aboutus3-fixed, #aboutus-desktop-arrows-3')
      .removeClass('fadeIn')
      .addClass('fadeOut');
    $('#aboutus1-fixed, #aboutus-desktop-arrows-1')
      .removeClass('hide fadeOut')
      .addClass('fadeIn');
    return false;
  });
  // About Us nav button scrolls correctly for tablet
  $("#aboutus-tablet-nav").click(function() {
    $("html, body").animate({ scrollTop: breakpoint2 }, "slow");
    return false;
  });

  // Lock orientation to portait mode in tablet

}); // end document ready
