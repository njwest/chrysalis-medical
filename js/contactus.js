$(function() {

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    console.log('name = ', name);
    console.log('email = ', email);
    console.log('message = ', message);
  });

}); // end document ready
