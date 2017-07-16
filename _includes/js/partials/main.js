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
