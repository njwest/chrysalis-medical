// Hide flashing black box
$(window).on('beforeunload', function() {
  $("video").hide(); // Hides black box before video plays on Safari, IE 11, and Firefox
});
