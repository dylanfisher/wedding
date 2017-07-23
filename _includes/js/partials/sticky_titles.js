// Sticky titles

$(function() {
  var options = {
    containerSelector: '.sticky-container',
    padding: {
      top: 30
    }
  };

  $('body').imagesLoaded( function() {
    $('.sticky-title').pin( options );
  });

  $(window).on('resize', function() {
    $('.sticky-title').attr('style', '').removeData('pin');
    $('.sticky-title').pin( options );
  });
});
