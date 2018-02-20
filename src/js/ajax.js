$(document).ready( function () {
    // I only have one form on the page but you can be more specific if need be.
    var $form = $('form');
    if ( $form.length > 0 ) {
        $('button').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test($("#mce-EMAIL").val())) {
              $('.dot-right').addClass("success");
              $('.dot-left').addClass("success");

              $('.header-bottom').text("Thank you ");
              $('.waiting-header').addClass("error-header")
              $('.label').hide();
              $("input").prop('disabled', true);

              setTimeout(function(){
                $('.dot-left').removeClass("success");
                $('.dot-right').removeClass("success");
              }, 3000);
            } else {
              $('.header-bottom').text("Please add a correct email");
              $('.waiting-header').addClass("error-header")
            }
        });
    }
});

function register($form) {
  var data = {};
					data.title = "title";
					data.message = $("#mce-EMAIL").val();
      $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          headers: {  'Access-Control-Allow-Origin': "http://localhost:5000" },
          url: 'http://www.murmur.fm/signup',
          success: function(data) {
            $('.dot-right').addClass("success");
            $('.dot-left').addClass("success");

            $('.header-bottom').text("Thank you ");
            $('.header-bottom').addClass("success-header");
            $('.label').hide();
            $("input").prop('disabled', true);

            setTimeout(function(){
              $('.dot-left').removeClass("success");
              $('.dot-right').removeClass("success");
            }, 3000);
          }
    });
}
