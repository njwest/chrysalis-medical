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
// Cache selectors
var nav = $(".nav");
var navHeight = 80;
// All list items
var menuItems = nav.find("a");
// Anchors corresponding to menu items
var scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) {
    return item;
  }
});

// Hide flashing black box
$(window).on('beforeunload', function() {
  $("video").hide(); // Hides black box before video plays on Safari, IE 11, and Firefox
});

// Greenify 'Home' link in navbar on load
(function($, viewport){
  $('#home-desk-tab > a').css('color', green);
})(jQuery, ResponsiveBootstrapToolkit);

// Greenify navtabs on scroll
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

  // Get container scroll position
   var fromTop = $(this).scrollTop()+navHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove greenHighlight class
   menuItems
     .css('color', blue)
     .filter("a[href='#" + id + "']").css('color', green);

}); // end window scroll
