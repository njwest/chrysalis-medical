$(function() {

  var log = console.log.bind(console);
  var green = '#A4B447';
  var blue = '#28779F';

  // Disable scrollify on mobile and tablet
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $.scrollify.disable();
    $('.hide').removeClass('hide').addClass('fadeIn');
  }

  // Greenify 'Home' link in navbar on load
  (function($, viewport){
    // Greenify on load except mobile nav
    if ( viewport.is('xs') === false) {
      $('#home-desk-tab > a').css('color', green);
    }
  })(jQuery, ResponsiveBootstrapToolkit);


  // Recalculate browser size on resize
  $( window ).resize(function() {
    $.scrollify.update();
  });

  $.scrollify({
    section : ".fullpage-section",
    before: function(i, panels) {
      var ref = panels[i].attr('data-section-name');
      log('ref = ', ref);
      if (ref === 'Home'){
        $('#hero-row').removeClass('fadeOut').addClass('fadeIn');
        $('#aboutus1-row').removeClass('fadeIn').addClass('fadeOut');
        $("#aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#expertise'], a[href='#contactus'], a[href='#howwework']").css('color', blue);
        $("#home-desk-tab > a").css('color', green);
      }
      else if (ref === 'About Us 1') {
        $('#hero-row').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus1-row').removeClass('hide fadeOut').addClass('fadeIn');
        $('#aboutus2-row').removeClass('fadeIn');
        $("#home-desk-tab > a, a[href='#howwework'], a[href='#expertise'], a[href='#contactus']").css('color', blue);
        $("#aboutus-desktop-nav, #aboutus-tablet-nav").css('color', green);
      }
      else if (ref === 'About Us 2') {
        $('#aboutus1-row').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus2-row').removeClass('hide fadeOut').addClass('fadeIn');
        $('#aboutus3-row').removeClass('fadeIn').addClass('fadeOut');
      }
      else if (ref === 'About Us 3') {
        $('#aboutus2-row').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus3-row').removeClass('hide fadeOut').addClass('fadeIn');
        $("a[href='#howwework'], a[href='#expertise'], a[href='#contactus'], #home-desk-tab > a").css('color', blue);
        $("#aboutus-desktop-nav, #aboutus-tablet-nav").css('color', green);
      }
      else if (ref === 'How We Work') {
        $('#aboutus3-row').removeClass('fadeIn').addClass('fadeOut');
        $("#aboutus-desktop-nav, #aboutus-tablet-nav, #home-desk-tab > a, a[href='#expertise'], a[href='#contactus']").css('color', blue);
        $("a[href='#howwework']").css('color', green);
      }
      else if (ref === 'Expertise') {
        $("a[href='#howwework'], #aboutus-desktop-nav, #aboutus-tablet-nav, #home-desk-tab > a, a[href='#contactus']").css('color', blue);
        $("a[href='#expertise']").css('color', green);
      }
      else if (ref === 'Contact Us') {
        $("a[href='#expertise'], a[href='#howwework'], #aboutus-desktop-nav, #aboutus-tablet-nav, #home-desk-tab > a").css('color', blue);
        $("a[href='#contactus']").css('color', green);
      }
    }, // end before

  }); //end $.scrollify

}); // end document ready
