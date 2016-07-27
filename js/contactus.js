$(function() {

  var formMessages = $('#form-messages');
  var url = "http://www.chrysalismedical.com/emailapi/api/email";
  var successResponse = "Your message has been sent. ";
  var checkmark = '<i class="fa fa-check" aria-hidden="true"></i>';
  var errorResponse = "An error has occurred. Please try again. ";
  var exclamationError = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>';

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    var jsondata = {
        "UserEmail" : email,
        "UserFirstName" : name,
        "UserLastName" : "darryl",
        "FromEmail" : "test@n24i.com",
        "ToEmail" : "darryl.mendonez@nucleuscentral.com; marina.tolkacheva@nucleuscentral.com",
        "ReplyToEmail" : "Ohmmurugan.Sadasivam@nucleuscentral.com",
        "CopyToEmail" : "Ohmmurugan.Sadasivam@nucleuscentral.com",
        "Subject" : "Chrysalis Contacts",
        "EmailContent" : message
    };

    console.log(jsondata);
    $.ajax({
      type: "POST",
      url: url,
      data: jsondata,
      success: function (msg) {
          $(formMessages).removeClass('bg-danger text-danger');
          $(formMessages).addClass('bg-success text-success');
          $(formMessages).text(successResponse);
          $(formMessages).append(checkmark);
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
          console.log('success');
      },
      error: function (msg) {
        $(formMessages).removeClass('bg-success text-success');
        $(formMessages).addClass('bg-danger text-danger');
        $(formMessages).text(errorResponse);
        $(formMessages).append(exclamationError);
        console.log('error');
      }
  });
});

    // if success
  //   .done(function(response) {
  //
  //   })
  //
  //   // if error
  //
  //
  // });

}); // end document ready
