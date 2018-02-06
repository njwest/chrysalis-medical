'use strict';

// Hide flashing black box on home page
$(window).on('beforeunload', function() {
  $("video").hide(); // Hides black box before video plays on Safari, IE 11, and Firefox
});

// remove animations on contact form for xs view
$(window).load(function() {

  var viewportWidth = $(window).width();
  // console.log('viewportWidth = ', viewportWidth);
  if ( (viewportWidth < 768) || ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ) {
    $("#contact-form-div").removeClass("fadeInDown wow").removeAttr("data-wow-delay");
  }

  $(window).resize(function () {
    viewportWidth = $(window).width();
    // console.log('viewportWidth resized to = ', viewportWidth);
    if (viewportWidth < 768) {
      $("#contact-form-div").removeClass("fadeInDown wow").removeAttr("data-wow-delay");
    }
    else {
      $("#contact-form-div").addClass("fadeInDown wow").attr("data-wow-delay", "{{ formDelay }}");
    }
  });

  // copyright year
  function displayFullYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("get-full-year").innerHTML = n;
  }
  displayFullYear();
  
});
