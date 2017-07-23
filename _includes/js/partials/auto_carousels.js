// Auto carousels aka marquee

$(function() {
  var $carousels = $('.auto-carousel');

  $carousels.each(function() {
    var $carousel = $(this);

    $carousel.imagesLoaded(function() {
      var $children = $carousel.children();
      var width = $children.last().offset().left + $children.last().outerWidth(true);
      var multiplier = Math.ceil( App.windowWidth / width );
      var duration = width / 0.13;

      for ( var i = multiplier - 1; i >= 0; i-- ) {
        $carousel.append( $children.clone() );
      }

      $carousel.children().wrapAll('<div class="auto-carousel__viewport">');

      var $viewport = $carousel.find('.auto-carousel__viewport');

      var animate = function() {
        $viewport.transition({ x: 0 }, 0, 'linear')
                 .transition({ x: -width }, duration, 'linear', function() {
                   animate();
                 });
      }

      animate();
    });
  });
});
