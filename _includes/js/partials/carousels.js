// Carousels

$(function() {
  var $carousels = $('.carousel');

  $carousels.each(function() {
    var $carousel = $(this);

    $carousel.flickity({
      imagesLoaded: true,
      wrapAround: true,
      selectedAttraction: 0.017,
      pageDots: false,
      adaptiveHeight: true,
      arrowShape: {
        x0: 10,
        x1: 60, y1: 50,
        x2: 60, y2: 15,
        x3: 60
      }
    });

    $carousel.on('staticClick.flickity', function() {
      $carousel.flickity('next');
    });
  });
});
