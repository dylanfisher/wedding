// Scroll

$(function() {
  //
  // Home scroll
  //

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

  //
  // Header gradient scroll
  //

  var headerGradientActivePoint = 300;

  $(window).on('scroll.headerScroll', function() {
    if ( App.scrollTop >= headerGradientActivePoint ) {
      $html.addClass('has-scrolled');
    } else {
      $html.removeClass('has-scrolled');
    }
  });

  $(window).trigger('scroll.headerScroll');

  //
  // Dylan and Nika scroll
  //

  var $textFade = $('.text-fade-in');

  if ( $textFade.length ) {
    var textFadeActivatePoint;
    var setTextFadeActivatePoint = function() {
      textFadeActivatePoint = $textFade.offset().top - ( App.windowHeight / 4 );
    };

    $('body').imagesLoaded(function() {
      setTextFadeActivatePoint();
    });

    $(window).resize(function() {
      setTextFadeActivatePoint();
    });

    $(window).on('scroll.dylanNikaScroll', function() {
      if ( App.scrollTop >= ( textFadeActivatePoint ) ) {
        $textFade.addClass('active');
        $(window).off('scroll.dylanNikaScroll');
      }
    });

    $(window).trigger('scroll.dylanNikaScroll');
  }
});
