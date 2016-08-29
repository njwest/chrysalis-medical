Chrysalis Medical Communications

Synopsis/Description:
Official website for Chrysalis Medical Communications. Sections include Home, About Us, How We Work, Expertise, and Contact Us.

Installation
A preprocessor is necessary to update scss files

API Reference
"UserEmail" : email,
"UserFirstName" : name,
"UserLastName" : "",
"FromEmail" : "test@n24i.com",
"ToEmail" : "darryl.mendonez@nucleuscentral.com; marina.tolkacheva@nucleuscentral.com",
"ReplyToEmail" : "",
"CopyToEmail" : "",
"Subject" : "Chrysalis Contacts",
"EmailContent" : message

Environments

Production
Testing: http://test.chrysalismedical.com/
Login credentials:
User: chrysalisuser
pw: Pa$$word123

Staging: http://creativestage.nucleusclient.com/chrysalis-site/

Authors:
Darryl Mendonez

Version Notes
0.1.0

Reusability Report

// Animated GIFs don't autoplay on page refresh.
// Allow gif to animate on page reload
$("#transformative-thinking-gif").attr("src", "img/transformative-thinking.gif?" + Math.random());
$("#chrysalis-logo-gif").attr("src", "img/chrysalis-logo.gif?" + Math.random());

// Auto-close mobile nav on user click
$('.nav a').on('click', function(){
  if($('.navbar-toggle').css('display') !='none'){
    $(".navbar-toggle").trigger( "click" );
  }
});

// Disable on mobile and tablet
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // disable code here
}

// Replace console.log() with just log()
var log = console.log.bind(console);

// Check which direction the user is scrolling
var scroll = 0;
var previousScroll = 0;
var scrollingDown;
var scrollingUp;
var directionCheck = function() {
  if (previousScroll < scroll) {
    scrollingDown = true;
    scrollingUp = false;
    previousScroll = scroll;
  }
  else if (scroll < previousScroll) {
    scrollingDown = false;
    scrollingUp = true;
    previousScroll = scroll;
  }
};
