(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('nav').pushpin({ top: $('nav').offset().top });
  }); // end of document ready
})(jQuery); // end of jQuery name space