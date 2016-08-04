var scroll = 0;
var previousScroll = 0;
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

// Hide flashing black box
$(window).on('beforeunload', function() {
  $("video").hide(); // Hides black box before video plays on Safari, IE 11, and Firefox
});

$(window).scroll(function() {
  scroll = $(window).scrollTop();
  directionCheck();
  if (scrollingDown) {

    // desktop & tablet navbar img appears when user begins to scroll down
    $('#desktop-navbar-img, #tablet-navbar-img, #hero-arrow')
      .attr('data-wow-delay', '1.5s')
      .attr('data-user-scroll', 'true')
      .attr('style', '-webkit-animation-delay: 1.5s; -moz-animation-delay: 1.5s; animation-delay: 1.5s');

  } // end scrollingDown

}); // end window scroll
