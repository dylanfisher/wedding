// From password

$(document).on('submit', '.mc-password-form', function(e) {
  e.preventDefault();

  var $form = $(this);
  var $passwordInput = $form.find('#mc-password');
  var password = $passwordInput.val().trim().toLowerCase();
  var $passwordHint = $form.find('.mc-password-form__hint-content');

  // Super secret password :)
  if ( password == 'pinkclouds' || password == 'pink clouds' ) {
    $form.transition({ opacity: 0 }, 800, function() {
      $form.hide();
    });
    $('.mc-form').css({ opacity: 0 }).show().transition({ opacity: 1 }, 800);
  } else {
    $passwordHint.html("Sorry, that&rsquo;s not the right password.");
  }
});
