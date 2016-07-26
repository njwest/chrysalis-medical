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

    var jsondata = {
        "UserEmail" : email,
        "UserFirstName" : name,
        "UserLastName" : "",
        "FromEmail" : "",
        "ToEmail" : "Ohmmurugan.Sadasivam@nucleuscentral.com",
        "ReplyToEmail" : "",
        "CopyToEmail" : "",
        "Subject" : "Chrysalis Contacts",
        "EmailContent" : message
    };

    console.log(jsondata);
    $.ajax({
      type: "POST",
      url: "http://www.chrysalismedical.com/emailapi/api/email",
      contentType: "application/json; charset=utf-8",
      data: jsondata,
      success: function (msg) {
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');
          $(formMessages).text(response);
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
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
