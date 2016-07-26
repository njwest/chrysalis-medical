$(function() {

  var form = $('#contact-form');
  var formData = $(form).serialize();
  var formMessages = $('#form-messages');
  var url = "http://www.chrysalismedical.com/emailapi/api/email";
  var response = "Your message has been sent."

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

    var jsondata = {
        "UserEmail" : email,
        "UserFirstName" : name,
        "UserLastName" : "darryl",
        "FromEmail" : "test@n24i.com",
        "ToEmail" : "darryl.mendonez@nucleuscentral.com",
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
          $(formMessages).removeClass('bg-danger');
          $(formMessages).addClass('bg-success text-success');
          $(formMessages).text(response);
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
          console.log('success');
      },
      error: function (msg) {
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
