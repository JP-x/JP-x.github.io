(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('nav').pushpin({ top: $('nav').offset().top });

  }); // end of document ready
})(jQuery); // end of jQuery name space


    $('#night_mode').click(function() {
    //alert("Checkbox state (method 2) = " + $('#night_mode').is(':checked'));
   	 	if($('#night_mode').is(':checked'))
   	 	{
   	 		bod.className = "grey darken-3 white-text";
   	 		index_banner.className = "parallax-container"
   	 		n_banner.src="img/name_banner_night.png" 
   	 		banner_img.src="img/banner_night.jpg"
   	 	}
   	 	else
   	 	{
   	 		bod.className = "white black-text";
   	 		index_banner.className = "parallax-container-day"
   	 		n_banner.src="img/name_banner_day.png" 
   	 		banner_img.src="img/banner_test.jpg"
   	 	}
	});