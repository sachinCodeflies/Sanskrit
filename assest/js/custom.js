  jQuery(document).ready(function($) {
  // By default hide .close-pass
  $('.close-pass').hide();

  // On click show password
  $('.show-pass').click(function() {
    $('#password-field').attr('type', 'text');
    $('.show-pass').hide();
    $('.close-pass').show();
  });

  // On click hide password
  $('.close-pass').click(function() {
    $('#password-field').attr('type', 'password');
    $('.close-pass').hide();
    $('.show-pass').show();
  });
});

 $('#uploadTrigger').on('click', function () {
    $('#imageUpload').click();
  });

  $('#imageUpload').on('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#profilePreview').attr('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });