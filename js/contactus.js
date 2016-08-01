$(function() {

  var formMessages = $('#form-messages');
  var url = "http://www.chrysalismedical.com/emailapi/api/email";
  var successResponse = "Your message has been sent. ";
  var checkmark = '<i class="fa fa-check" aria-hidden="true"></i>';
  var errorResponse = "An error has occurred. Please try again. ";
  var exclamationError = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>';
  var blankFieldError = "Please fill out all fields before clicking 'Submit'. "

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var jsondata = {
        "UserEmail" : email,
        "UserFirstName" : name,
        "UserLastName" : "",
        "FromEmail" : "test@n24i.com",
        "ToEmail" : "darryl.mendonez@nucleuscentral.com; marina.tolkacheva@nucleuscentral.com",
        "ReplyToEmail" : "",
        "CopyToEmail" : "",
        "Subject" : "Chrysalis Contacts",
        "EmailContent" : message
    };

    if ((name === "") || (email === "") || (message === "")) {
      $(formMessages).removeClass('bg-success text-success bounceIn');
      $(formMessages).addClass('bg-danger text-danger shake');
      $(formMessages).text(blankFieldError);
      $(formMessages).append(exclamationError);
      setTimeout(function() {
        $(formMessages).removeClass('shake');
      }, 250);
    }
    else {
      $.ajax({
        type: "POST",
        url: url,
        data: jsondata,
        success: function (msg) {
            $(formMessages).removeClass('bg-danger text-danger shake ');
            $(formMessages).addClass('bg-success text-success bounceIn');
            $(formMessages).text(successResponse);
            $(formMessages).append(checkmark);
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
            setTimeout(function() {
              $(formMessages).removeClass('bounceIn');
            }, 250);
        },
        error: function (msg) {
          $(formMessages).removeClass('bg-success text-success bounceIn');
          $(formMessages).addClass('bg-danger text-danger shake');
          $(formMessages).text(errorResponse);
          $(formMessages).append(exclamationError);
          setTimeout(function() {
            $(formMessages).removeClass('shake');
          }, 250);
        }
      });
    }
  });

}); // end document ready
