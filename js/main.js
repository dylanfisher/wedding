// Namespace
var App = {};

// Load
$(function() {
  App.scrollTop = $(window).scrollTop();
  App.windowWidth  = $(window).width();
  App.windowHeight = $(window).height();
});

// Resize
$(window).on('resize', function() {
  App.windowWidth = $(window).width();
  App.windowHeight = $(window).height();
});

// Scroll
$(window).on('scroll', function() {
  App.scrollTop = $(window).scrollTop();
});

// Custom scripts
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
  } else {
    $(window).off('scroll.homeContentNav');
  }
});
