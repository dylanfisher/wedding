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

App.breakpoint = function(checkIfSize) {
  // Make sure these match the breakpoint variables set in variables.scss
  var xs = 480;
  var sm = 768;
  var md = 1092;
  var lg = 1400;
  var breakpoint;

  if(App.windowWidth < sm) {
    breakpoint = 'xs';
  } else if(App.windowWidth >= lg) {
    breakpoint = 'lg';
  } else if(App.windowWidth >= md) {
    breakpoint = 'md';
  } else {
    breakpoint = 'sm';
  }

  if(checkIfSize !== undefined) {
    if(checkIfSize == 'xs') {
      return App.windowWidth < xs;
    } else if(checkIfSize == 'sm') {
      return (App.windowWidth >= xs && App.windowWidth < sm);
    } else if(checkIfSize == 'md') {
      return (App.windowWidth >= sm && App.windowWidth < md);
    } else if(checkIfSize == 'lg') {
      return App.windowWidth >= md;
    }
  } else {
    return breakpoint;
  }
};

App.breakpoint.isMobile = function() {
  return ( App.breakpoint('xs') || App.breakpoint('sm') );
};
