var log = console.log.bind(console);
var green = '#A4B447';
var blue = '#28779F';

$(function() {

  // Greenify 'Home' link in navbar on load
  $("#home-desk-tab > a").css('color', green);



  $.scrollify({
    section : ".fullpage-section",
    before: function(i, panels) {
      var ref = panels[i].attr('data-section-name');
      log('ref = ', ref);
      (function($, viewport){
        if ( (viewport.is('xs')) || (viewport.is('sm')) ) {
          $('.static').removeClass('panel fullpage-section');
          log('static function fired');
        }
      })(jQuery, ResponsiveBootstrapToolkit);
      if (ref === 'Home'){
        $('#hero-row').removeClass('fadeOut').addClass('fadeIn');
        $('#aboutus1-row').removeClass('fadeInUp').addClass('fadeOut');
        $("#aboutus-desktop-nav, #aboutus-tablet-nav, a[href='#expertise'], a[href='#contactus'], a[href='#howwework']").css('color', blue);
        $("#home-desk-tab > a").css('color', green);
      }
      else if (ref === 'About Us 1') {
        $('#hero-row').removeClass('fadeIn').addClass('fadeOut');
        $('#aboutus1-row').removeClass('hide fadeOut').addClass('fadeInUp');
        $('#aboutus2-row').removeClass('fadeInUp');
        $("#home-desk-tab > a, a[href='#howwework'], a[href='#expertise'], a[href='#contactus']").css('color', blue);
        $("#aboutus-desktop-nav, #aboutus-tablet-nav").css('color', green);
      }
      else if (ref === 'About Us 2') {
        $('#aboutus1-row').removeClass('fadeInUp').addClass('fadeOut');
        $('#aboutus2-row').removeClass('hide').addClass('fadeInUp');
        $('#aboutus3-row').removeClass('fadeInUp').addClass('fadeOut');
      }
      else if (ref === 'About Us 3') {
        $('#aboutus2-row').removeClass('fadeInUp').addClass('fadeOut');
        $('#aboutus3-row').removeClass('hide fadeOut').addClass('fadeInUp');
        $("a[href='#howwework'], a[href='#expertise'], a[href='#contactus'], #home-desk-tab > a").css('color', blue);
        $("#aboutus-desktop-nav, #aboutus-tablet-nav").css('color', green);
      }
      else if (ref === 'How We Work') {
        $('#aboutus3-row').removeClass('fadeInUp').addClass('fadeOut');
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
    after: function(i, panels) {
      var ref = panels[i].attr('data-section-name');
      log('ref = ', ref);

    } // end after

  }); //end $.scrollify

}); // end document ready
