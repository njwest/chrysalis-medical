'use strict';

// Hide flashing black box on home page
$(window).on('beforeunload', function() {
  $("video").hide(); // Hides black box before video plays on Safari, IE 11, and Firefox
});

// remove animations on contact form for xs & sm view
$(window).load(function() {

  var viewportWidth = $(window).width();
  if (viewportWidth < 992) {
    $("#contact-form-div").removeClass("fadeInDown wow");
  }

  $(window).resize(function () {
    if (viewportWidth < 992) {
      $("#contact-form-div").removeClass("fadeInDown wow");
    }
    else {
      $("#contact-form-div").addClass("fadeInDown wow");
    }
  });
});