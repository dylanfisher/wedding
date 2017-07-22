// Auto carousels

$(function() {
  var $carousels = $('.auto-carousel');

  $carousels.each(function() {
    var $carousel = $(this);

    $carousel.marquee({
      duplicated: true,
      pauseOnHover: false,
      startVisible: true,
      gap: 0,
      duration: 10000
    });
  });
});
