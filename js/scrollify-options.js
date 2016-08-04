$(function() {

  var log = console.log.bind(console);
  var green = '#A4B447';
  var blue = '#28779F';

  // Greenify 'Home' link in navbar on load
  $("#home-desk-tab > a").css('color', green);

  // Recalculate browser size on resize
  $( window ).resize(function() {
    $.scrollify.update();
    log('window resized');
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
