$(function() {

  var formMessages = $('#form-messages');
  var url = "http://www.chrysalismedical.com/emailapi/api/email";
  var successResponse = "<i class='fa fa-check' aria-hidden='true'></i> Your message has been sent.";
  var errorResponse = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> An error has occurred. Please try again.";
  var blankFieldError = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please fill out all fields before clicking 'Submit'."

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

    // Check for blank fields before submitting ajax request
    if ((name === "") || (email === "") || (message === "")) {
      $(formMessages).removeClass('bg-success text-success bounceIn zoomOut');
      $(formMessages).addClass('bg-danger text-danger shake');
      $(formMessages).html(blankFieldError);
      setTimeout(function() {
        $(formMessages).removeClass('shake');
      }, 1000);
      setTimeout(function() {
        $(formMessages).addClass('zoomOut');
      }, 10000);
    }
    else {
      $.ajax({
        type: "POST",
        url: url,
        data: jsondata,
        success: function (msg) {
            $(formMessages).removeClass('bg-danger text-danger shake zoomOut');
            $(formMessages).addClass('bg-success text-success bounceIn');
            $(formMessages).html(successResponse);
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
            setTimeout(function() {
              $(formMessages).removeClass('bounceIn');
            }, 1000);
            setTimeout(function() {
              $(formMessages).addClass('zoomOut');
            }, 10000);
        },
        error: function (msg) {
          $(formMessages).removeClass('bg-success text-success bounceIn zoomOut');
          $(formMessages).addClass('bg-danger text-danger shake');
          $(formMessages).html(errorResponse);
          setTimeout(function() {
            $(formMessages).removeClass('shake');
          }, 1000);
          setTimeout(function() {
            $(formMessages).addClass('zoomOut');
          }, 10000);
        }
      });
    }
  });

}); // end document ready
