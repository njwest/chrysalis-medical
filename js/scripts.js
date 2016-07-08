// $(document).ready(function() {
//
//   var scrollBreakpoint1 = 300;
//   var scrollBreakpoint2 = 500;
//   var scrollBreakpoint3 = 600;
//   var scrollBreakpoint4 = 900;
//   var aboutUs1 = $('#aboutus1');
//   var aboutUs2 = $('#aboutus2');
//   var aboutUs3 = $('#aboutus3');
//
//   // Hide about us descriptions 2 & 3 on page load
//   $('#aboutus2').addClass('hide');
//   $('#aboutus3').addClass('hide');
//
//   // Hide and show aboutus descriptions on scroll
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//
//     /***************
//     SCROLLING DOWN
//     ****************/
//     // Transition from aboutus1 to aboutus2
//     if (scroll >= scrollBreakpoint1) {
//       $('#aboutus1').addClass('fadeOut');
//     }
//
//     if (scroll >= scrollBreakpoint2) {
//       $('#aboutus1').detach();
//       $('#aboutus2').removeClass('hide').addClass('fadeIn');
//     }
//
//     // Transition from aboutus2 to aboutus3
//     if (scroll >= scrollBreakpoint3) {
//       $('#aboutus2').addClass('fadeOut');
//     }
//
//     if (scroll >= scrollBreakpoint4) {
//       $('#aboutus2').detach();
//       $('#aboutus3').removeClass('hide').addClass('fadeIn');
//     }
//
//     /***************
//     SCROLLING UP
//     ****************/
//     // Transition from aboutus3 to aboutus2
//     if (scroll <= scrollBreakpoint4) {
//       $('#aboutus3').removeClass('fadeIn').addClass('fadeOut');
//     }
//
//     if (scroll <= scrollBreakpoint3) {
//       $('#aboutus3').detach();
//       $('#aboutus2').removeClass('fadeOut').addClass('fadeIn');
//     }
//
//     // Transition from aboutus2 to aboutus1
//     if (scroll <= scrollBreakpoint2) {
//       $('#aboutus2').removeClass('fadeIn').addClass('hide');
//     }
//
//     if (scroll <= scrollBreakpoint1) {
//       $('#aboutus').append(aboutUs1);
//       $('#aboutus1').removeClass('fadeOut').addClass('fadeIn');
//     }
//   });
//
// });
