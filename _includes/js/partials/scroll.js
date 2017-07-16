// Scroll

$(function() {
  var $html = $('html');
  var $homeContent = $('.home-content');
  var $nav = $('.nav');

  if ( $homeContent.length ) {
    var homeContentoffset = $homeContent.offset().top;
    var navHeight = $nav.height() + $nav.position().top;
    var offset = homeContentoffset - navHeight;

    $(window).on('scroll.homeContentNav', function() {
      if ( App.scrollTop >= offset ) {
        $html.addClass('nav-active');
      } else {
        $html.removeClass('nav-active');
      }
    });

    $(window).trigger('scroll.homeContentNav');
  }

  var headerGradientActivePoint = 300;

  $(window).on('scroll.headerScroll', function() {
    if ( App.scrollTop >= headerGradientActivePoint ) {
      $html.addClass('has-scrolled');
    } else {
      $html.removeClass('has-scrolled');
    }
  });

  $(window).trigger('scroll.headerScroll');
});
