// Hide flashing black box on home page
$(window).on('beforeunload', function() {
  $("video").hide(); // Hides black box before video plays on Safari, IE 11, and Firefox
});
