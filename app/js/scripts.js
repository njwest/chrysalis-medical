'use strict';

// Hide flashing black box on home page
$(window).on('beforeunload', function() {
  $("video").hide(); // Hides black box before video plays on Safari, IE 11, and Firefox
});

// remove animations on contact form for xs & sm view
$(window).load(function() {

  var viewportWidth = $(window).width();
  // console.log('viewportWidth = ', viewportWidth);
  if ( (viewportWidth < 992) || ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    $("#contact-form-div").removeClass("fadeInDown wow");
    $("#top-nav").removeClass("box-shadow");
  }

  $(window).resize(function () {
    viewportWidth = $(window).width();
    // console.log('viewportWidth resized to = ', viewportWidth);
    if (viewportWidth < 992) {
      $("#contact-form-div").removeClass("fadeInDown wow");
    }
    else {
      $("#contact-form-div").addClass("fadeInDown wow");
    }
  });
});
