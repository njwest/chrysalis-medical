$(function() {

  var form = $('#contact-form');
  var formData = $(form).serialize();
  var formMessages = $('#form-messages');

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    console.log('form = ', form);
    console.log('formData = ', formData);
    console.log('name = ', name);
    console.log('email = ', email);
    console.log('message = ', message);

    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })

    // if success
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })

    // if error
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
      } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

}); // end document ready
