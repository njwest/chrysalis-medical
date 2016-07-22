$(function() {

  var previousScroll = 0;
  var scroll;
  var scrollingDown;
  var scrollingUp;
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

  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    directionCheck();
    if (scrollingDown) {

      // desktop navbar img appears when user begins to scroll down
      $('#desktop-navbar-img')
        .attr('data-wow-delay', '1.5s')
        .attr('data-user-scroll', 'true')
        .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');
    }

  }); // end window scroll

}); // end document ready


// style="visibility: visible;-webkit-animation-delay: 0.5s; -moz-animation-delay: 0.5s; animation-delay: 0.5s;"
